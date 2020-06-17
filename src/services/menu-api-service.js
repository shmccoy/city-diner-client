import config from '../config'

const MenuApiService = {
  getMenus() {
    return fetch(`${config.API_ENDPOINT}/menu`, {
      headers: {
                
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMenu(menuId) {
    return fetch(`${config.API_ENDPOINT}/menu/${menuId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMenuChanges(menuId) {
    return fetch(`${config.API_ENDPOINT}/dashboard/${menuId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postChanges(menuId, text) {
    return fetch(`${config.API_ENDPOINT}/dashboard`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        menu_id: menuId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default MenuApiService