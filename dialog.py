from selenium.webdriver.common.alert import Alert
import time

class Dialog:
    def my_dialog(self,driver):

        #2秒待機
        time.sleep(5)

        #ダイヤログのボタン押下
        #Alert(driver).accept()