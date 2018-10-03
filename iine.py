from selenium import webdriver

class Iine:
    def my_iine(self,driver):

        serch_word1 = "いいねした人全員フォローする"

        #検索ボックスを探す
        useridBox = driver.find_elements_by_tag_name("input")[0]
        #入力
        useridBox.send_keys(serch_word1)