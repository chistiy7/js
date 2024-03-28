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
console.log(logEntries({body: "Kimono Orange", head: "Backwards Hat Red"}))


// Деструктуризация объектов

const config = {
  id: 1,
  isAdmin: false,
  theme: {
    dark: true,
    zoom: false
  }
}

const {id,isAdmin = 0, theme} = config
console.log(id,isAdmin)

// occurence when name of object is similar to another object

const type = "USB C"

const user ={
    address: "0x",
    type: "contract" 
}
const {address, type: addressType} = user
console.log(addressType)

//  конкатенация обьектов
const userSOL ={
    address: "0x",
    type: "contract" 
}
const userBTC= {
    type: "illigible",
    date: "2020"
}

const solBTC = {...userSOL, ...userBTC}
console.log(solBTC)

// PRATICE 94 | Напишите функцию joinLoot, чтобы она возвращала объект, являющийся суммой объектов rare и common. 
// Если артефакт присутствует в rare, то он должен заменять значение этой «шмотки» из common. 
const rare = {
    head: "Ornate Helm of Rage"
}

const common = {
    head: "Linen Hood",
    chest: "Chain Mail",
    weapon: "Grave Wand"
}

const joinLoot = (rare,common) =>{
    return {...common, ...rare}
}
console.log(joinLoot(rare,common)) 
// Practice 95 | Напишите функцию getRarityScore, чтобы она деструктурировала объект loot на две переменных: bag и score.
const getRarityScore = loot =>{
    const {bag,score} = loot
    return `Мешок #${bag} имеет ${score} очков редкости.`
}
console.log(getRarityScore({bag: 767,score: 15.2 }))

const getRarityScoreRank = (loot) => {
    const {bag,score,rank = 0} = loot
    return `Мешок #${bag} имеет ${score} очков редкости и занимает ${rank} место в рейтинге.`
  }
  console.log(getRarityScoreRank({bag: 6189, score: 164.41}))



//                                               Опциональная цепочка I
const dao = {
    members: {
        founder: {
            address: "0xife" 
        }
    }
}

let address = undefined

if (dao.members && dao.members.founder && dao.members.founder.address) // пример обращения к обьектам по очереди проверяя наличие каждого
{
  address = dao.members.founder.address
}

let optL = dao.members?.founder?.address // пример использования опциональной цепочки

console.log(optL)

// практика 97  Напишите функцию getBalance, чтобы она возвращала баланс кошелька в сети Ethereum. 
// В случае, если такое свойство не будет найдено, функция должна возвращать undefined.
const wallet ={
    etherium:{
        balane: "0,2",
        address: "0xc"
    }
}
const getBalance = obj =>{
    return obj.etherium?.balance
}

console.log(getBalance(wallet))
//                                          Опциональная цепочка II(для массивов и функций)

const data = {
    gasFf: [2,4,4,3],
    status: "ready for trans"
}

const alert = data.status?.substring(0,5) //функция 
const firstGAS = data.gasF?.[0] // array
if(firstGAS){
    console.log(alert)

}

// Напишите функцию getBalance, чтобы она возвращала баланс кошелька в сети Ethereum в верхнем регистре. 
// В случае, если такое свойство не будет найдено, функция должна возвращать undefined.
const wallet ={
    etherium:{
        balanc: "245 eth"
    }
}
const getBalance = wallet =>{
    return wallet.etherium?.balance?.toUpperCase().substring(0,4) // возвращает undefined
}
console.log(getBalance(wallet))

//                                                   Нулевое слияние I(возвращает правое значение если слева undefined)
// Напишите функцию getBalance, чтобы она возвращала свойство balance из переданного ей объекта address. 
// В случае, если такое свойство не задано, функция должна возвращать строку "N/A".

const address = {
    balance: 42
}
const getBalance = address =>{
    return address.balance ?? "N/A"
}
console.log(getBalance(address))

const getGreeting = user => {
    return `Привет ,${user.name ?? "аноним"}`
  }
console.log(getGreeting({name: "ВИТАЛИК"}))

// PRACTICE 103


const prices = {
    ethereum: {
        usd: 3382,
        eur: 2916,
        rub: 246392
    },
    Bcd:{
        usd: 3382,
        eur: 2916,
        rub: 246392
    }
  };

const getPrice = (currency,name) => {
    const key = Object.keys(prices) // ETH
    console.log(b)
    return (prices[key][currency] ?? `Нет ${name}`)

};
console.log(getPrice("rb","rbginu"))

// Допишите функцию getChainId, чтобы она возвращала идентификатор сети, взятый из переданного ей объекта network. 
// В противном случае должен возвращаться дефолтный идентификатор 0. Изучите примеры использования функции, чтобы понять структуру ожидаемого ею объекта.
const network = {
    info:{
        chainI: 22342
    }

}
const getChainId = network =>{            // ОПЦИОНАЛЬНАЯ ЦЕПОЧКА С НУЛЕВЫМ СЛИЯНИЕМ
    return network.info?.chainID ?? 0
}
console.log(getChainId(network))

const tx = {
    details:{
        values:{
        }
    }
}

const getxValue = tx => {
    if (tx.details && tx.details.value && tx.details.value.eth) { // refactoring with usage of zero merge and optional list 
      return tx.details.value.eth
    }
    return "N/A"
  }

const getTxValue = tx =>{
    return tx.details?.values?.eth ?? "N/A"
}
console.log(getTxValue(tx))

// Допишите функцию getNetworkName так, чтобы она возвращала название сети в нижнем регистре из переданного ей объекта, а в случае его отсутствия строку "network".
const Oj ={
    info:{
        name: "Rinkeby"
    }
}
const getNetworkName = network =>{
    return network.info?.name.toLowerCase() ?? "network"
}
console.log(getNetworkName(Oj))


//                                                                             Рефакторинг условий


const getTxStatus = tx =>{
    const messages ={
        pending: "Ожидаем подтверждения от сети.",
        confirmed: "Пробуем выполнить транзакцию",
        canceled: "Не удалось выполнить транзакцию",
        success:"Транзакция выполнена успешно!"
    }
    return messages[tx] ?? "Статус транзакции недоступен."
} 
console.log(getTxStatus("pending"))                      

// ПРИВЕДЕНИЕ ТИПОВ

const delta = 5-5
const str = "fi"
if(delta){
    console.log("строка в условии")
}


//                                                                       Массивы объектов


const assets = [
    {
      id: 1,
      slug: "bitcoin",
      symbol: "BTC",
      creator: {
        firstName: "Satoshi",
        lastName: "Nakamoto",
        avatarUrl: null
      }
    },
    {
      id: 2,
      slug: "ethereum",
      symbol: "ETH",
      creator: {
        firstName: "Vitalik",
        lastName: "Buterin",
        avatarUrl: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg"
      }
    }
  ]




// Допишите функцию logNames, чтобы она печатала в консоль имя и фамилию пользователя, отделенные пробелом.

const sampleUsers = [{
    id: 1,
    firstName: "Satoshi",
    lastName: "Nakamoto"
}, {
    id: 2,
    firstName: "Vitalik",
    lastName: "Buterin"
}]

const logNames = users => {
    users.forEach(user => {
      console.log(`${user.firstName} ${user.lastName}`)
    })
}
console.log(logNames(sampleUsers))


const block15034336 = [{
    gasLimit: 120678,
    gasUsed: 120678 
  }, {
    gasLimit: 48594,
    gasUsed: 29328
  }, {
    gasLimit: 145026,
    gasUsed: 96684
  }]

const GasUsed = block =>{
    let sum = 0
    block.forEach(obj => {
        sum += obj.gasUsed
    })
    return sum
}

const AVG = block =>{  // среднее значение лимита газа
    let sum = 0
    let count = 0
    block.forEach(obj => {
        count += 1
        sum += obj.gasLimit
        
    })
    return sum / count
}
console.log(AVG(block15034336))



const block15034523 = [{
    gas: {
      gasFees: {
        gasPrice: 50.1,
        feePaid: 2.52
      },
      gasLimit: 120000,
      gasUsed: 41309
    },
    value: 0
  }, {
    gas: {
      gasFees: {
        gasPrice: 50.1,
        feePaid: 1.28
      },
      gasLimit: 90000,
      gasUsed: 21000
    },
    value: 98.21
  }]

const getGgetTotalFeesPaid = block =>{
    let sum = 0
    block.forEach(obj => {
        sum += obj.gas?.gasFees?.feePaid
    })
    return sum
}
console.log(getGgetTotalFeesPaid(block15034523))

//  Допишите функцию getDeposits, чтобы она возвращала массив размеров депозитов на основе принятого параметра stakers.


const stakers = [{
    entity: "Lido",
    deposits: 4138464,
    validators: 129327
  }, {
    entity: "Kraken",
    deposits: 837184,
    validators: 26162
  }]

const getDeposits = stakers =>{
    return stakers.map(stake => stake.deposits)
}
console.log(getDeposits(stakers))  

//                                             КЛАССЫ


// Напишите функцию mintToken, которая должна возвращать новый экземпляр класса Token. 
// Выберите любое значение supply, отвечающее за количество выпущенных токенов.
class Token{
    constructor(supply) {
        this.supply = supply 
    }
}

const MintToken = (bob) =>{
    return new Token(bob)
}
console.log(MintToken(4567))

// Создайте класс Account, который бы превращал параметры конструктора в три переменных экземпляра: address, balance и nonce.
class Account{
    constructor(address,balance,nonce) {
        this.balance = balance
        this.address = address
        this.nonce = nonce
    }
}

// Напишите класс Punk с двумя методами экземпляров:
// 1) getId, который должен возвращать номер панка с приставкой #
// 2) isAlien, который должен возвращать true, если переменная экземпляра type имеет значение "Alien"

class Punk{
    constructor(number,type) {
        this.number = number
        this.type = type
    }
    getId(){
        return `#${this.number}`
    } 
    isAlien(){
        return this.type === "Alien"
    }
}


const punk3100 = new Punk(3100, "Alien")
console.log(punk3100)
// Напишите геттер для свойства todos класса Tasks. 
// Геттер должен возвращать строку задач в формате CSV. То есть каждый таск должен быть отделен запятой и пробелом.

class Tasks {
    constructor(todos) {
        this._todos = todos          
    }
    get todos(){
        console.log("Сработал геттер todos")
        return this._todos.join(", ")
    }
}
const task = new Tasks(["Выспаться", "Попробовать Zwift"])
console.log(task.todos)
// Дополните класс Transaction геттером и сеттером, задающим внутреннюю переменную экземпляра _wei, хранящую сумму 
// транзакции amount в деноминации wei (с 18 дополнительными нулями).

class Transaction {
    constructor(amount) {
      this.amount = amount
    }
      
    get amount() {
      return this._wei
    }
      
    set amount(value) {
      this._wei = value * 1000000000000000000
    }
  } 
const tx = new Transaction(1.5)
console.log(tx.amount)

// ЦЕПОЧКИ КЛАССОВ 

class Course {
    constructor(name, isCompleted) {
      this.name = name
      this.isCompleted = isCompleted
    }
    
    markCompleted() {
      this.isCompleted = true
      return this // Доступен внутри цепочки
    }
  
    setGrade(grade) {
      this.grade = grade
      return this // Доступен внутри цепочки
    }
  
    getCertificate() {
      this.issueCertificate = true
      return this // Доступен внутри цепочки
    }
  }

  const course = new Course("Solidity", true)
  course.markCompleted().setGrade(5).getCertificate()
  console.log(course)

  class Halving {
    constructor(totalSupply) {
      this.totalSupply = totalSupply
    }
  
    cutSupply() {
        console.log("method started")
        if (Halving.getVote()) {
            this.totalSupply /= 2
      }
    }
  
    static getVote() {
        console.log("method started")
        return Math.random() <= 0.5 // Вероятность 50% на true
    }
  }
  const halving = new Halving(100000)
  halving.cutSupply

  console.log(Halving.getVote(),halving.totalSupply)

class TokeinSale {
    constructor() {
      this.amount = 1000
      this.token = "CRV"
      this.inWhitelist = false
    }
  
    addToWhitelist() {
        console.log("method started")
      this.inWhitelist = true
      this.amount *= 10
      console.log(this.amount)
      return this
    }
  
    setToken(symbol) {
        console.log("method started")
      this.token = symbol
      return this
    }
  
    applyBoost(percent) {
        console.log("method started")
      this.amount += this.amount / 100 * percent
      return this
    }
  }
  const tokensale = new TokeinSale
  tokensale.addToWhitelist().setToken("CVX").applyBoost(5)
  console.log(tokensale.amount)
//   Наследование классов
class Member {
    constructor(pseudonym, address) {
      this.pseudonym = pseudonym
      this.address = address
    }
  
    getPseudonym() {
      return this.pseudonym
    }
  
    getAddress() {
      return this.address
    }
}

class Founder extends Member{
    vote (){
        console.log(`Your votes are applied`)
    }
}
const founder = new Founder("wengalbi", "0x9ue838732ybh")
const member = new Member("chistiy", "0x9u38732ybh")
console.log(member.getAddress())

class User {
    constructor(balance, address) {
        this.balance = balance
        this.address = address
    }
    getBalance(){
        return this.balance
    }
    getAddress(){
        return this.address
    }
}

class Owner extends User{
    getBalance(){
        return `${this.balance} [owner]`
    }
    withdrawEth(){
        return "Transaction completed"
    }
}
const user = new User(7.85, "shitty.eth")
const owner = new Owner("zeneca.eth", 1.55)
console.log()

class VC {
    constructor(company,amount) {
        this.company = company
        this.amount = amount
    }
    getDeal(){
        return `${this.company} invited ${this.balance} millions $`
    }

}

class Multicoin extends VC {

}

class Dragonfly extends VC {

}

*/
class User {
    constructor(address, balance) {
      this.address = address
      this.balance = balance
    }
  
    getAddress() {
      return this.address
    }
      
    getBalance() {
      return this.balance
    }
  }
  
  class Owner extends User {
    constructor(address,balance,owner) {
        super(address,balance)
        this.owner = owner
    }
    getAddress() {
      return `${this.address} ${[this.owner]}`
    }
      
    withdrawEth() {
      return "Transaction completed"
    }
  }
  const owner = new Owner("goth.eth", 1.51, "deployer")
  console.log(owner.getAddress())