const CALENDER_ID = "ml1pnvcms61grq3ikr22g8ae2c@group.calendar.google.com"

const properties = PropertiesService.getScriptProperties();

function updateCache() {
  const calender = CalendarApp.getCalendarById(CALENDER_ID)
  var now = new Date()
  var after = new Date(now.getTime() + (14 * 24 * 60 * 60 * 1000))
  const events = calender.getEvents(now, after)
  const result = []
  events.forEach(item => {
    const instance = {
      title: item.getTitle(),
      startTime: item.getStartTime().getTime(),
      endTime: item.getEndTime().getTime(),
      detail: item.getDescription(),
      place: item.getLocation() === "" ? "NeosVR" : item.getLocation()
    }
    result.push(instance)
  })
  properties.setProperty("Cache", JSON.stringify(result));
}

function doGet() {
  var cache = properties.getProperty("Cache");
  return ContentService.createTextOutput(cache);
}
