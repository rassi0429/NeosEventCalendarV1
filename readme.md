# NeosEventCalendarV1
## 何
Googleカレンダーの予定をNeos内で見ることができるアイテム向けのGASコードです
## 使い方
1. 新規にGoogleスプレッドシートを作成し、GoogleAppScriptを作成します。
2. `main.gs`を張り付け、`CALENDER_ID`を編集してください。配信したいカレンダーのIDを張ります。
> GASを実行するユーザが`CALENDER_ID`にアクセスする権限を所持している必要があります。
3. 参考画像のように`updateCache`関数の時間主導型のトリガーを作成してください。
![image](https://user-images.githubusercontent.com/91118218/157538269-85edec67-8327-48b7-9c49-c3aab48895ec.png)
> 10分に１回ぐらいの更新でいいと思います。
4. APIをデプロイします。アクセスできるユーザを全員に変更します。
<img width="491" alt="image" src="https://user-images.githubusercontent.com/91118218/157538560-bb54290c-1d85-467a-93e0-2231ca68a4a8.png">
5. デプロイ時に出たウェブアプリURLをNeos内のアイテムに設定します。 `DV/settings/endpoint`  

![image](https://user-images.githubusercontent.com/91118218/157538867-f43ee1c9-55e3-4d92-852f-9600c8b21fa1.png)
