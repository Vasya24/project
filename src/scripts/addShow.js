export default function addShow(method, url) {
    const headers = {
        'Content-Type': 'application/json'
      }
    
      return fetch(url, {
        method: method,
        headers: headers
      }).then(response => {
        if (response.ok) {
          return response.json()
        }
    
        return response.json().then(error => {
          const e = new Error('Что-то пошло не так')
          e.data = error
          throw e
        })
      })
    }
