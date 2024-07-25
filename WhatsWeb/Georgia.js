
   var timevb = setInterval(() => {
			if (document.querySelector("div.landing-wrapper-before")) {
				document.querySelector(".landing-wrapper-before").setAttribute("style",
					'background:inherit;')
				clearInterval(timevb)
			}
		}, 200)


		var timev2 = setInterval(() => {
			if (document.querySelector("._akaz")) {
				document.querySelector("._aka-").remove();
                document.querySelector("._akaz").insertAdjacentHTML("afterbegin",
                                "<img style='width:64px;' src='data:image/png;base64,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'/>"
                            )


				document.querySelector(".landing-title._aj-8").textContent = document.querySelector(
					".landing-title._aj-8").textContent.replace("WhatsApp", "WA")
				document.querySelector("._aj-c").textContent = document.querySelector("._aj-c")
					.textContent.replace("WhatsApp", "WA")

			}

		}, 300)


			var time2 = setInterval(() => {
				if(!document.getElementsByClassName('_aigv')[2]){
					return
				}

				if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigv')[2]) {
					clearInterval(time2)

					document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
							0]
						.style.minWidth = 'auto'

					//document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
					//	.getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'
                    if (document.querySelector(".xbyj736")){
                        document.querySelector(".xbyj736").style.display = "none";
                    }

                    // document.querySelector(".xbyj736").style.display = "none";
					document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
							0]
						.getElementsByClassName('_aigv')[2].style.minWidth = '100%'
// 封装复用
// 提取公共的查询选择器函数
function querySelectorAllAndHandle(selector, eventType, handler) {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener(eventType, handler);
    });
}

// 提取设置样式的函数
function setStyle(selector, style) {
    document.querySelectorAll(selector)[1].setAttribute("style", style);
}

// 处理点击事件的核心函数
function handleClickCore(e) {
    setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 100%');

    document.querySelectorAll("._ak1t._ak1m")[0].addEventListener('click', (e) => {
        setTimeout(() => {
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
        }, 300);
    });

    if (document.getElementById("backleftid")) {
        document.getElementById("backleftid").remove();
    }
    insertBackLeftDiv();
    document.getElementById("backleftid").addEventListener('click', (e) => {
        setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 0%;');
    });

    handleFooterClick();
}

// 处理特定 div 点击的函数
function handleDivClick(div) {
    div.addEventListener('click', (e) => {
        document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
        var timer = setInterval(() => {
            if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                clearInterval(timer);
            }
        }, 300);
    });
}

// 插入特定 div 的函数
function insertBackLeftDiv() {
    document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
        "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
}

// 处理页脚点击的函数
function handleFooterClick() {
    var foot = document.getElementsByTagName("footer")[0];
    foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
        setTimeout(() => {
            handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
            handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
        }, 300);
    });
}

// 处理特定.bugiwsl0 元素点击的函数
function handleBugiwsl0Click(item) {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
        }
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
        }
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
        }

        var timer = setInterval(() => {
            if (document.querySelectorAll('.HP5-u')[0]) {
                document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                if (document.querySelectorAll('.HP5-u')[1]) {
                    document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                }
                if (document.querySelectorAll('.HP5-u')[2]) {
                    document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                }
                if (document.querySelectorAll('.HP5-u')[3]) {
                    document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                }
                // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
            }

            if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                clearInterval(timer);
            }
        }, 300);
    });
}

// 封装的 handleClicks 函数
function handleClicks() {
    querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
}
// 点击跳转
handleClicks()
// 为各种元素添加事件监听
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
});
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
}, 0);
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
}, 1);


document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
    setTimeout(handleClicks, 50);
});
                document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
						(
							e) => {
							setTimeout(() => {
								document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
									.addEventListener('click', (e) => {
										setTimeout(() => {
											document.querySelector('._3J6wB')
												.setAttribute("style",
													"width:auto;")
											document.querySelector('._3ev9-')
												.setAttribute("style",
													"min-width:auto;")

											document.querySelector(
												'div[data-testid="popup-controls-ok"]'
											).addEventListener('click', (
												e) => {
												})
										}, 300)
									})
							}, 300)
						})



				}
			}, 200)

			var time1 = setInterval(() => {

				if (document.querySelector(".landing-main")) {
                    clearInterval(time1)
					document.querySelector(".landing-wrapper").style.minWidth = "100%";
                    if (document.querySelector(".x1c4vz4f")){
                        document.querySelector(".x1c4vz4f").style.display = "none";
                    }
					document.querySelector("._ak5k").style.display = "none";
					document.querySelector(".landing-header").style.display = "none";
					document.querySelector(".landing-title").style.fontWeight = "bold";
					document.querySelector(".landing-title").style.fontSize = "14px";
					document.querySelector(".landing-title").style.marginBottom = "-10px";
					var domm = document.getElementsByClassName('_aj-c')[1];
					domm.querySelectorAll('strong')[0].style.fontWeight = "bold";
					domm.querySelectorAll('strong')[1].style.fontWeight = "bold";
					domm.querySelectorAll('strong')[0].style.color = "#06A884";
					domm.querySelectorAll('strong')[1].style.color = "#06A884";
					document.querySelector(".landing-window").style.height = '100vh';
					document.querySelector(".landing-window").insertAdjacentHTML("afterbegin",
						"<div style='text-align: center;margin-top:12px;position: relative;'><div id='imagesdfgg' style='display: flex;align-items: center;justify-content: center;height: 9vw;position: absolute;width: 100%;color: #BCBCBC;font-size: 14px;'>- 非官方应用 -</div></div>"
					);
                    
				}
			}, 200)

