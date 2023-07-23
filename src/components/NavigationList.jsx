export const NavigationList = [
                  {
                    id: 1, 
                    navItem: 'Кинопремьеры', 
                    path: '/', 
                    state: { 
                             page: 'premier', 
                             path: '',
                           },
                  },
                  {
                    id: 2, 
                    navItem: 'Топ фильмов', 
                    path: '/films?page=1', 
                    state: { 
                             page: 'top', 
                             path: '/films?page=',
                           },
                  },
                  {
                    id: 3, 
                    navItem: 'Сериалы', 
                    path: '/serials?page=1', 
                    state: { 
                             page: 'serial', 
                             path: '/serials?page=',
                           },
                  },
                  {
                    id: 4, 
                    navItem: 'Мультфильмы', 
                    path: '/mults?page=1', 
                    state: { 
                             page: 'mult', 
                             path: '/mults?page=',
                           },
                  },
                ];
    


   