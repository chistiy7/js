/*function mul(a,b){
    return a*b
}
console.log(mul(2,4))

let text = "vlad gay"
console.log(text.toUpperCase())
newtxt = text.length+1
console.log(newtxt)


function cont(day, month){
    return day + month
}
console.log(cont(11," november"))

function say(name){
    return `hello ${name}`
}
console.log(say("pizdec"))

function name(first,last){
    return `${first + last}`
}
console.log(name("Oleg", ' Petrov'))

function to(word){
    n = `${word}`
    //return n.substring(0,1).toUpperCase()+n.substring(1,n.length).toLowerCase()
    return n[0].toUpperCase()+n.substring(1).toLowerCase()
}
console.log(to("яВаХуе"))


n = "1000221"
console.log(Number.parseInt(n,2))


function yu(a,b){
    return a+b
}
console.log(yu(5,6))


//Напишите функцию getExcerpt, чтобы она возвращала первые 10 символов из принятой в аргументе строки, сопровождая их многоточием.
//Однако, если длина исходной строки меньше 10 символов, добавлять многоточие не нужно.

function re(text){
    if (text.length < 10){
        return text

    }
    return text.substring(0,10) + "..."
}
console.log(re('qwertyuip'))

function getExcerpt(text) {
  if (text.length >= 10) {
    return text.substring(0, 10) + "..."
  }
  return text
}


//Напишите функцию getLastBrowser, чтобы она возвращала последний элемент массива browsers.

function rev(browsers){
    browsers.push("fgh")
    return browsers

}
console.log(rev(["gfuh","tfyu"]))

// method of cycle the arrays

const pump = ["3456","fghj",[]]

pump.forEach(function (pump) {
    console.log(pump)
})

//Напишите функцию logIntoConsole, чтобы она перебирала все элементы массива elements и выводила каждый из них в консоль (используя console.log).


function logIntoConsole(elements){
    elements.forEach(function(element){
        console.log(element,0)
    })
}
console.log(logIntoConsole(["Brown","Orange"]))



// 'return" function required arrangment
function logLootBags(bags) {
    bags.forEach(function(bag) {
      console.log(bag)
    })
    return true // ✅ Ретерн из функции logLootBags
  }
console.log(logLootBags(["ytu","uifod","hjkf"]))



//Напишите функцию sumBags, чтобы она перебирала все элементы массива мешков с лутом bags и !!!!!!!!возвращала сумму их номеров.

const bags = [3043, 7658, 5046, 949]
function sumBags(bags){
    sum = 0
    bags.forEach(function(bag){
        sum+=bag
    })
    return sum
}
console.log(sumBags(bags))

//Напишите функцию sumSomeBags, чтобы она перебирала все элементы массива bags и возвращала сумму мешков с четырехзначными значениями.
const bags = [3043, 7658, 5046, 949]
function ssb(bags){
    sum = 0
    bags.forEach(function(bag){
        if (bag.toString().length === 4){
            sum+=bag
            console.log(bag)
        }
    })
    return sum
}
console.log(ssb(bags))

//Напишите функцию sumOddBags, чтобы она перебирала все элементы массива bags и возвращала сумму мешков с нечетными значениями.
const bags = [3, 8, 6, 9]
function sob(bags){
    sum = 0
    bags.forEach(function(bag){
        if (bag%2 === 1){
            sum+=bag
            console.log(bag)
        }
    })
    return sum
}
console.log(sob(bags))

const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"]
function getDropdown(curs) {
    let html = `<option value="">Выберите валюту</option> \n`;
    currencies.forEach(function (cur) {
      html += `<option value="${cur.toLowerCase()}">${cur}</option> \n`;
    });
    return html;
}
console.log(getDropdown(currencies))


const data = [
  ["Bitcoin", "47311"],
  ["Ethereum", "3407"],
  ["Solana", "163"],
  ["Tether", "1"],
];

export function renderTableRows(rows) {
    let html = "";
    rows.forEach(function (row) {
      console.log(row)
      html += `<tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
    </tr>`;
    });
    return html;
  }
  //Напишите функцию isTxIncluded, чтобы она возвращала true, если транзакция tx входит в блок транзакций bk, и false, если нет.

 function isTxIncluded(bk, tx) {
    return bk.includes(tx)
  
}
console.log(isTxIncluded(["0x912f", "0x8d19", "0x20ba"], "0x8d19"))
  isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a") // false
  isTxIncluded(["0x912f", "0x8d19", "0x20ba"], "0x8d19") // true
 

//Напишите функцию getSizes, чтобы она возвращала массив, состоящий из длин строк для элементов массива words. 

function getSizes(words) {
    count = words.map(function (word){
        return word.length
    })
    console.log(count)
    count.forEach(function(co){
        return co.length>7
    })
    return count
}
console.log(getSizes(["Moscow", "Coding", "School"]))
//getSizes(["Moscow", "Coding", "School"]) // [6, 6, 6]
//getSizes(["Do", "Your", "Own", "Research"]) // [2, 4, 3, 8]


//Напишите функцию getWithSpaces, чтобы она возвращала массив из двух элементов: — строки, составленной из слов массива strings, соединенных пробелами; — длины этой строки.

function getWithSpaces(strings) {
    bulk = strings.join(" ")
    const b = [bulk,bulk.length]
    return b
}
console.log(getWithSpaces(["Moscow", "Coding", "School"]))
getWithSpaces(["Moscow", "Coding", "School"]) // ["Moscow Coding School", 20]
getWithSpaces(["Do", "Your", "Own", "Research"]) // ["Do Your Own Research", 20] 

//objects
function getAnimeDetails() {
    return {
      title: "Dr. Stone",
      episodes: 24,
      ongoing: false
    }
  }
  console.log(getAnimeDetails())
  //function returning string that shows Element from anime object
  const anime = {
    title: "pesda",
    episodes: 45
  }
function getEl(anime){
    return `Название ${anime.title},колво серий - ${anime.episodes}`
}
console.log(getEl(anime))

function sum(a,b=0){
    return a+b

}
console.log(sum())
// ?????????????
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
console.log(map(f,a))./
const alpha = (a = 0, b = 0) => {
    return a**b
}
console.log(alpha)
function tre(alpha){
    if (alpha > 6) {
        return "Неверное"
    }
    else{return "ghjk"}

}
console.log(tre(alpha))
//Астрологи объявили месяц борьбы с повышенным сахаром! Используя стрелочные функции, напишите функцию getAvgGlucose, 
//чтобы она возвращала среднее арифметическое замеров глюкозы checks.
data = [5.4, 8.1, 6.3, 4.9]
const glu = (bibka)=>{
    avg = 0
    bibka.forEach(checks =>{
        avg += checks
        num = data.length
    })
    return (avg/num).toFixed(1)
}
console.log(glu(data))


//filter of an array with => functions
const scores = [3,4,5,56,2,321,9]
const bibka = scores.filter(score => score>9)
console.log(bibka)

const testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]
const need = testnets.find(testnet => testnet === "Goerli")
console.log(need)
const bibka = [345,45,3443,4235,33,0,-1,4,4]
const Gretweets = retweets => retweets.filter(retweet => retweet>0)
console.log(Gretweets(bibka))
// /Напишите функцию getTwitterHandle, чтобы она возвращала searchUser (передаваемый как второй параметр), если он найден в массиве, и undefined, если нет.
const users = ["@kyled116", "@dhof", "@karl_dot_tech"]
const getTwitterHandle = (users, searchUser) => users.find(user => user === searchUser)
console.log(getTwitterHandle(users, "@kyled116"))


//Напишите функцию getUsernameLengths, чтобы она возвращала массив из количества символов для каждой строки, 
//принятой в параметре users, за минусом символа @.

const getUsernmeLengths = users => { 
    return users.map(user => user.length - 1)
  }



const users = ["@kyled116", "@dhof", "@karl_dot_tech"]
const getUsernameLengths = users =>{
    newU = users.map(user =>{
        return user.substring(1,user.length).length// для удаления одного символа неважно какого  можно просто длинну сократить
    })
    return newU
}
console.log(getUsernameLengths(users))


const users = ["    @kyled116", "@dhof", "@karl_dot_tech    "]
console.log(users.trim())// не метод массива
const string = "       tv7yhuij 7yuhij yuiby uijyb uij"
console.log(string.startsWith("       tv7"),string.endsWith("j"),string.startsWith("iv7"),string.includes("uij"))


//Напишите функцию getTwitterHandle, чтобы она возвращала twitterHandle, принятый в параметре. Ник всегда должен начинаться с символа @, 
//даже если он отсутствует в исходном параметре (см. примеры использования).
const getTwitterHandle = handle =>{
    if (handle.startsWith("@")){return handle}
    return `@${handle}`//!!!!!!!!!!!!!!!!!!!!!!!!!!!! ВСТАВКА В СТРОКУ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
console.log(getTwitterHandle("hefuji"))


//Напишите функцию getCurrency, чтобы она возвращала "Доллар", если в принятой строке price есть знак доллара ($), 
//"Евро", если в параметре обнаружен значок евро (€), и "Недоступно" в остальных случаях. 

// SWITCH РАБОТАЕТ С СОСТОЯНИМИ А НЕ С СПЕЦ ПЕРЕМЕННЫМИ
const getCurrency = price =>{
    switch (price) {
        case (price.includes("$")): return "Доллар"
        case (price.includes("€")): return "Евро"
    }
}
console.log(a)
const getCurrency = price =>{
    if (price.includes("$")) return "Доллар" 
    if (price.includes("€")) return "Евро" 
    elsereturn "Недоступно"

}
console.log(getCurrency("2345678"))

let rollups = "Arbitrum,Optimism,Starkware"
console.log(rollups.split("_"))

const kampai = "За ростовскую братву!"
const b = kampai.replaceAll(" ","_")
console.log(b)



//Напишите функцию getSlug, чтобы она возвращала слаг, составленный на основе принятой строки title. 
//Слаг не должен быть длиннее 15 символов (символы сверх лимита игнорируются), не может содержать заглавных букв и все пробелы должны быть заменены на дефисы -.
const getSlug = title =>{
    if (title.length>15) return "ИГНОР НАХУЙ"
    return title.toLowerCase().replaceAll(" ","-")
}
console.log(getSlug("Shill          __--- your bags"))

//Напишите функцию getTodosNumber, чтобы она возвращала количество пунктов туду-листа в строке в формате CSV 
//(формат значений, разделенных запятыми) из параметра. Пример строки в формате CSV: "первая задача,вторая задача".
const todos = "Сдать пластик,Купить капучинатор,Пересадить аглаонему"
const getTodosNumber = todos =>{
    return todos.split(",").length
}
console.log(getTodosNumber(todos))

//                                                  МЕТОДЫ РАБОТЫ С МАССИВАМИ 

const users = [{
    id: 1,
    name: "Nick Szabo"
  }, {
    id: 2,
    name: "Gavin Wood"
  }]
const izv = users.map(user => user.name).join(", ")
console.log(izv)*/

/* На основе параметра rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 

const data = [
    ["Bitcoin", 47311],
    ["Ethereum", 3407],
    ["Solana", 163],
    ["Tether", 1]
  ]



const render = rows =>{
    const html = `<tr>\n<td>${rows.map(row => `<td>${row[0]}</td>\n <td>${row[1]}</td>\n`).join("")}\n</tr> `
    return html
}
console.log(render(data))


const getDropdown = (currencies) => {
    const html = `<option value="">Выберите валюту</option>${currencies.map(currency => `<option value="${currencies[0].toLowerCase()}">${currencies[0]}</option>`).join("")}`
    return html
  }
// Напишите функцию logValues, чтобы она выводила в консоль значение каждого ключа объекта objпо отдельности. 
// То есть, для объекта, состоящего из трех пар ключей/значений, функция должна вывести три сообщения в консоль.

const logValues = obj =>{
    const keys = Object.keys(obj)
    console.log(keys)
    keys.forEach(key =>{
        console.log(obj[key])
    })
}
console.log(logValues({id: 1, name: "Vitalik",  country: "Canada"}))


//const html = <ul>      ${users.map(user =>        <li>${user.name}</li>      ).join("")}              </ul>
//console.log(html) // "<ul> <li>Nick Szabo</li><li>Gavin Wood</li> </ul>"

const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"]
function getDropdown(curs) {
    let html = <option value="">Выберите валюту</option> \n;
    currencies.forEach(function (cur) {
      html += <option value="${cur.toLowerCase()}">${cur}</option> \n;
    });
    return html;
}
console.log(getDropdown(currencies))

const data = [3,56,5,3]

rabota_map = data.map(el => el*2).join(" ")
console.log(rabota_map)

                                                        //ПРАКТИКА 72  
//   TIP HOW TO USE .MAP()  const html = <tr>\n<td>${rows.map(row => <td>${row[0]}</td>\n <td>${row[1]}</td>\n`).join("")}\n</tr> `

const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"]
const newCur = currencies.map(currency => <option value="${currency.toLowerCase()}">${currency}</option>).join("")
const renderTableRows = currencies => {
    return <option value="">Выберите валюту</option>${newCur}
}
console.log(renderTableRows(currencies))

                                                      //  .EVERY() // .SOME()
const temps = [7,-3,15]
console.log(temps.every(temp => temp < 16))
console.log(temps.some(temp => temp >= 15))
//Напишите функцию needOtrabotka, чтобы она возвращала true, если хотя бы одна из оценок ниже трех.
const needOtrabotka = temps =>{
    return temps.some(temp => temp < 3)
}
console.log(needOtrabotka(temps))
//                                               ОЧИСТКА МАССИВА И МЕТОД .SPLICE()  
const scam = ["$ADA", "$XRP", "$EOS"]
scam.length = 0 //
console.log(scam)

const tokens = ["$UNI", "$LINK", "$DAI"]
const first = tokens.splice(1,2)
console.log(first,tokens)

//Напишите функцию resetUser, чтобы она обнуляла массив ролей пользователя чата.
const user = ["Admin", "Moderator"]
const resetUser = user =>{
    user.length = 0
}
resetUser(scam)
console.log(scam)

//Напишите функцию demoteUser, чтобы она удаляла первый элемент в массиве ролей, который всегда предполагает больше власти, чем следующий за ним. 
//Функция должна возвращать новую редакцию массива, не содержащую удаленную роль.
const userRole = ["Admin", "Moderator", "Editor"]
const demoteUser =  userRole =>{
    userRole.splice(0,1)
}
console.log(userRole)
// Task 77: deleting all objects from second and return array with only first element 

const getfirst = userRole =>{
    userRole.splice(1)
}
getfirst(userRole)
console.log(userRole)


//                                                 .REDUCE(ACC,CUR)

const nums = [23,3,34,34,3,2,-1]
nums.reduce((arr,cur)=>{
    return arr*cur
},1)
console.log(nums)

let punks = [3100, 7804, 5217, 8857]
const sum = punks.reduce((arr,cur)=>{
    return arr+cur
},0)
console.log(sum)

const Punks = [3100, 7804, 5217, 8857]
const sumPunks = Punks =>{
    return Punks.reduce((arr,cur)=>{
        return arr+cur
    },0)
}
console.log(sumPunks(Punks))
//                                        ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ

const blockr = [13335416, 355]

const [blockHeight, totalTxs] = blockr
console.log(totalTxs)

//Напишите функцию getBlockReport, которая будет деструктурировать переменные blockHeight и totalTxs из параметра block.
const block = [9585604, 110]
const getBlockReport = block =>{
    const [blockHeight,totalTxs] = block
    return Блок номер ${blockHeight} содержит ${totalTxs} транзакций
}
console.log(getBlockReport(block))
//                                     КОНКАТЕНАЦИЯ МАССИВОВ

const sizes = [9.5,8,10,5]
const names = ["de la soul", "sean wotherspoon"]

const spred = (sizes,names)=>{
    return [...sizes, ...names]
}
console.log(spred(sizes,names))

//                                         РАБОТА С ОБЬЕКТАМИ 
//                                       ДИНАМИЧЕСКИЕ СВОЙСТВА
const Savva = {
    id: 777,
    name: "slava bebra",
    age: 18
}
const key = "id"
console.log(Savva[key])
//имя свойства находится в переменной
const GetObj = (user,key) =>{
    return user[key]
}
console.log(GetObj(Savva,"name"))

//         object.keys(x)


const settings = {
    theme: "dark",
    version: "2.4.1",
    beta: false
}
const keys = Object.keys(settings); console.log(keys)
keys.forEach(key =>{
    console.log(settings[key]) 
})
//Напишите функцию getObjectDetails, принимающую объект obj и имя ключа key, чтобы она возвращала строку 
//«Значением ключа X является Y», где X — имя ключа, передаваемого в параметре key, а Y – его значение.
const getObjectDetails = (obj,key) =>{
    return Значением ключа ${key} является ${obj[key]} 
}
console.log(getObjectDetails({id: 1, name: "Vitalik"},"name"))

// Напишите функцию getNumberOfKeys, чтобы она возвращала количество ключей полученного объекта obj
const getNumberOfKeys = obj =>{
    return Object.keys(obj).length
}
console.log(getNumberOfKeys({id: 1, name: "Savva", country: "canada"}))

//Напишите функцию getCapsKeys, 
// чтобы она возвращала массив, состоящий из названий всех ключей объекта obj, написанных капсом.

const getCapsKeys = obj =>{
    const keys = Object.keys(obj)
    return keys.map(key => key.toUpperCase())
     
}
console.log(getCapsKeys({id: 1, name: "Savva", country: "canada"}))

const prices = {
    ethereum: {
      usd: 3382,
      eur: 2916,
      rub: 246392
    }
  }
const key = "ethereum"
// const eth = prices[key]
const rates = Object.keys(prices[key])
console.log(prices.ethereum)


const settings = {
    theme: "dark",
    version: "2.4.1",
    beta: false
}
const keys = Object.keys(settings); console.log(keys)
keys.forEach(key =>{
    console.log(settings[key]) 
})



MIGHT BE TRANSFERED

const prices = {
    ethereum: {
      usd: 3382,
      eur: 2916,
      rub: 246392
    }
  }
const getPrice = obj =>{
    const keys = Object.keys(obj)
    const ekeys = Object.keys(obj[keys])
    ekeys.forEach(ekey =>{
        console.log(obj[keys][ekey])
    })

}
console.log(getPrice(prices))

//                                                           OBJECT.VALUES() OBJECT.ENTRIES()
const phone = {
    model: "14 pro",
    storage: 256,
    color: "space black"
}

const VALUES = Object.values(phone)
const VAlues = Object.entries(phone)
console.log(VAlues.splice(0,2))

// Напишите функцию getCapsValues, чтобы она возвращала массив, состоящий из всех значений объекта obj, написанных капсом. 
const getCapsValues = obj =>{
    return Object.values(obj).map(value => value.toUpperCase())
}
console.log(getCapsValues({body: "Lab Coat"}))

// Напишите функцию logEntries, чтобы она выводила элементы объекта obj в консоль. 
// Запустите готовую функцию в консоли браузера и внимательно изучите логи, чтобы наглядно визуализировать конвертацию объекта в массив массивов (используйте иконку ▶ для раскрытия вложенного массива).
const logEntries = obj =>{
    console.log(Object.entries(obj))
}
console.log(logEntries({body: "Kimono Orange", head: "Backwards Hat Red"}))*/

