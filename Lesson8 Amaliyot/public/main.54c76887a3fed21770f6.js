;(() => {
  var e = {
      16: () => {
        const e = document.querySelector('.header__dark-mode'),
          t = document.querySelector('body'),
          a = localStorage.getItem('mode') ? localStorage.getItem('mode') : null
        a && t.classList.add('dark-mode'),
          e.addEventListener('click', () => {
            t.classList.toggle('dark-mode'),
              a
                ? localStorage.setItem('mode', '')
                : localStorage.setItem('mode', 'dark')
          })
      },
    },
    t = {}
  function a(o) {
    var n = t[o]
    if (void 0 !== n) return n.exports
    var s = (t[o] = { exports: {} })
    return e[o](s, s.exports, a), s.exports
  }
  ;(() => {
    'use strict'
    const e = document.querySelector('.loader'),
      t = (t) => {
        t ? e.classList.remove('hidden') : e.classList.add('hidden')
      },
      o = async (e) => {
        t(!0)
        const a = await fetch(e)
        if (!a.ok) throw (t(!1), new Error('Something went wrong...'))
        const o = await a.json()
        return t(!1), o
      },
      n = document.querySelector('.cards'),
      s = (e) => {
        ;(n.innerHTML = ''),
          e.forEach((e) => {
            const t = e.name.common,
              a = e.population,
              o = e.region,
              s = e.capital ? e.capital[0] : 'No Capital',
              r = e.flags.svg,
              c = document.createElement('li')
            c.classList.add('cards__item'),
              (c.innerHTML = `\n            <a href="./about.html?country=${t}">\n                <img src=${r} alt="germany-flag" width="267" height="160">\n                <div class="cards__item-inner">\n                    <h3 class="cards__title">${t}</h3>\n                    <p class="population">Population: <span>${a}</span></p>\n                    <p class="region">Region: <span>${o}</span></p>\n                    <p class="capital">Capital: <span>${s}</span></p>\n                </div>\n            </a>\n        `),
              n.appendChild(c)
          })
      },
      r =
        (document.querySelector('.country-info'),
        document.querySelector('.search'))
    r.search.addEventListener('input', () => {
      const e = r.search.value.toLowerCase(),
        t = document.querySelectorAll('.cards__item')
      document.querySelectorAll('.cards__title').forEach((a, o) => {
        a.textContent.toLowerCase().includes(e)
          ? (t[o].style.display = 'block')
          : (t[o].style.display = 'none')
      })
    })
    const c = document.querySelectorAll('.search__select-list li'),
      l = document.querySelector('.search__select span')
    c.forEach((e) => {
      e.addEventListener('click', () => {
        let t
        ;(l.textContent = e.textContent),
          (t =
            'All' == e.textContent
              ? 'https://restcountries.com/v3.1/all'
              : `https://restcountries.com/v3.1/region/${e.textContent}`),
          o(t)
            .then((e) => {
              s(e)
            })
            .catch((e) => {
              alert(e.message)
            })
      })
    }),
      a(16),
      o(
        'https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region'
      )
        .then((e) => {
          s(e)
        })
        .catch((e) => {
          alert(e.message)
        })
  })()
})()
