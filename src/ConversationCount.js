let data = require('../public/conversations.json');
let moment = require('moment');
moment().format();
// var dateString = moment.unix(value).format("MM/DD/YYYY");
// Top 5 of the most active
//companies in the last N months
//(N = 1 through 6). We measure
//how active a company is by their
//number of conversations.
// Game Plan of Attack:
// 1. then you loop over each message
// 2. for each message, take the users and look up their companyId
// 3. then you've got the companies participating in the message
// 4. figure out which month the message was sent in, call it X
// 5. then for each company c, companiesHash[c][X] += 1

window.data = data

// active_companies = { company_id : count_of_conversations }
// { email : company_id }

// conversations: { from: email }
// users: { email:, company_id: }
let conversations = data["conversations"]

let email_to_company_id_lookup = {}
let users = data["users"]
for(let i = 0; i < users.length; i++) {
  let user = users[i];
  let email = user["email"]
  let company_id = user["company_id"]
  email_to_company_id_lookup[email] = company_id
}

// let recent_companies = {} // {company_id: date}
// for(let i = 0; i < conversations.length; i++) {
//   let conversation = conversations[i] // indexing into outer array
//   let email = conversation.from
//   let company_id = email_to_company_id_lookup[email]
//   recent_companies[company_id] = conversation.date }

// console.log(recent_companies)
// recent_companies.filter()
// function filterLastNMonths(n){
//
// }
// {company_id: month}
// [
//   {email:'josh@noredink.com', company_id:'5'},
//   {email:'arbonap@gmail.com', company_id:'6'},
//   {},
//   {}
// ]

// active_companies = { company_id : count_of_conversations }
let active_companies = {}
function lastNMonths(num) {
  let now = moment()
  let numMonthsAgo = now.subtract(num, "months").format('x')
  for(let i = 0; i < conversations.length; i++) {
    let conversation = conversations[i] // indexing into outer array
    let email = conversation.from
    let company_id = email_to_company_id_lookup[email]
    if (active_companies[company_id] && conversation.date > numMonthsAgo) {

      active_companies[company_id] += 1
    } else if (active_companies[company_id] && conversation.date < numMonthsAgo) {
      continue
    } else {
      active_companies[company_id] = 1
    }
  }
  return active_companies
}

let fourMonths = lastNMonths(4)

function sortObject(obj) {
    let arr = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) { return b.value - a.value; }); //sort descending
    return arr; // returns array
}

let sortedActiveCompaniesLastFourMonths = sortObject(fourMonths).slice(0).slice(0, 5)
console.log(sortedActiveCompaniesLastFourMonths);

// function getTopN(arr, prop, n) {
//     var clone = arr.slice(0);
//     // sort descending
//     clone.sort(function(x, y) {
//         if (x[prop] == y[prop]) return 0;
//         else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
//         else return -1;
//     });
//     return clone.slice(0, n);
// }
// let active_companies_per_month_count = {}
// for(let i = 0; i < conversations.length; i++) {
//   let conversation = conversations[i] // indexing into outer array
//   let email = conversation.from
//   let dateStamp = conversation.date
//   let dateIndex = new Date(dateStamp).getMonth()
//   let company_id = email_to_company_id_lookup[email]
//   let monthsList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   if (active_companies_per_month_count[company_id]) {
//
//     active_companies[company_id][dateIndex]++
//   } else {
//     active_companies[company_id] = monthsList
// }
//   // console.log(active_companies_per_month_count);
// }

// function buildCompanyHash (data) {
//   companiesHash = {}
//   data.companies.forEach(c => {
//     companiesHash[c.company_id] = c
//     c.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   })
//   return companiesHash
// }
//
// buildCompanyHash(data);
//
// function buildUserHash (data) {
//   usersHash = {}
// data.users.forEach(u => {
//   usersHash[u.email] = u
//   usersHash[u.company_id] = u
//
//   })
//   return usersHash
// }
// function buildMessageHash (data) {
//   messageHash = {}
// data.conversations.forEach(m => {
//   messageHash[m.from] = m
// })
//   return messageHash
// }
//
// // emailsInMessages = Object.keys(messageHash);
// // function mapEmailsToCompany(emailsInMessages){
// //   emailsToCompaniesHash = {}
// //
// // }
// // emailsInMessages = Object.keys(messageHash);
//
// props: {
//   companies: buildCompanyHash(data),
//   users: buildUserHash(data),
// }
//
//
// function calculateMessageCounts (messages) {
//   messages.forEach(msg => {
//     const id = this.props.users[from].company_id
//     const company = this.props.companies[id]
//     company.counts[new Date(msg.date).getMonth()]++
//   })
// }
//
//
// const company = usersHash[msg.from].company_id
// new Date(msg.time).getMonth() // 0, 1, 2, 3... (0 = Jan, 11 = Dec)

//
//
//   "deadbeefbad1deac0ffee": {
//     'Name': 'Dead Beef Industries, Inc',
//     'Company Id': 'deadbeefbad1deac0ffee'
//   }
// }
//
// usersHash = {
//   'mrfrobnitz@sobeefy.net': {
//     'company_id': 'deadbeefbad1deadc0ffee',
//     'name': {first: 'Jacobin', last: 'Frobnitz'}
//   }
// }
