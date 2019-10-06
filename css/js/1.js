// 显示二级菜单↓（文章一栏我因为用css3写，所以if里才多加了一个除去article的条件）
var navList = document.getElementById("navList").getElementsByTagName("li")
console.log(navList)
for(i = 0; i < navList.length; i++ ){
    navList[i].onmouseover = function(){
        if(this.className != "show" && this.className != "article"){
            this.className = "show"
        }
    }
    navList[i].onmouseout = function(){
        if(this.className != "" && this.className != "article"){
            this.className = ""
        }

    }
}