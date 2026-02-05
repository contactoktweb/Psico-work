import localFont from 'next/font/local'

export const marcellus = localFont({
    src: '../public/marcellus/Marcellus-Regular.ttf',
    variable: '--font-marcellus',
    display: 'swap',
})

export const lato = localFont({
    src: [
        {
            path: '../public/lato/Lato-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/lato/Lato-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/lato/Lato-Light.ttf',
            weight: '300',
            style: 'normal',
        },
    ],
    variable: '--font-lato',
    display: 'swap',
})
