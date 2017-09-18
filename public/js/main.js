var myRouter = new VueRouter({
    routes: [
        {
            path: '/about',
            component: {
                template: `
                <div class="route-content">
                  <p>Here are some of my goals:</p>
                  <ul style="margin-top:10px;">
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>Jquery</li>
                  </ul>
                </div>
                `
            }
        },
        {
            path: '/education',
            component: {
                template: `
                <div class="route-content">
                  <ul style="margin-top:10px;">
                    <li>Kansas University Grad of '97</li>
                    <li>Creighton University</li>
                    <li>CodeCraft</li>
                  </ul>
                </div>
                `
            }

        },
        {
            path: '/contact',
            component: {
                template: `
                <div class="route-content">
                  <ul style="margin-top:10px;">
                    <li>eric@magicathand.com</li>
                    <li>913-461-5332</li>
                  </ul>
                </div>
                `
            }
        }

    ]
})

var mainVm = new Vue({
    el: '#app',
    router: myRouter
})
