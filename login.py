from selenium import webdriver

class Login:         
    def my_login(self,driver):

        user_id = "test941010"
        password = "d3876476"

        #ユーザID入力ボックスを探す
        useridBox = driver.find_element_by_name("username")
        #ユーザID入力
        useridBox.send_keys(user_id)

        #パスワード入力ボックスを探す
        passwordBox = driver.find_element_by_name("password")
        #パスワード入力
        passwordBox.send_keys(password)

        #ログインボタンを探す
        roginButton = driver.find_elements_by_tag_name("button")[0]
        #検索ボタンをクリック
        roginButton.click()