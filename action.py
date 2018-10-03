from selenium import webdriver
import login
import dialog
import iine

class Action:

    # chromedriver.exeを使う
    driver = webdriver.Chrome("C:/Users/mk-da/Project/IAMT/chromedriver/chromedriver.exe")

    #chrome起動してInsutagramに移動
    driver.get("https://www.instagram.com/accounts/login")

    #login.pyを呼び出す_ログイン
    action_login = login.Login()
    action_login.my_login(driver)

    #ダイヤログのボタン押下
    #action_dialog = dialog.Dialog()
    #action_dialog.my_dialog(driver)

    #いいね！をする
    #action_iine = iine.Iine()
    #action_iine.my_iine(driver)