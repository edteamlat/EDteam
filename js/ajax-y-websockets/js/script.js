const xhr = new XMLHttpRequest()
console.log(xhr.readyState)
xhr.open('GET', 'https://people.googleapis.com/v1/people/me/connections?sortOrder=LAST_NAME_ASCENDING', true)
console.log(xhr.readyState)
xhr.send()
console.log(xhr.readyState)
