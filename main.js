
tailwind.config = {
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                black: '#000000',
                blue: {
                    950: '#0D192C',
                    900: '#15263F',
                    800: '#2E405A',
                    500: '#8BACD9'
                },
                cyan: {
                    400: '#00FFF8'
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif']
            },
            fontSize: {
                'preset-1': ['1.375rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '600' }],
                'preset-2': ['1.125rem', { lineHeight: '1.45', letterSpacing: '0px', fontWeight: '300' }],
                'preset-3': ['1rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '600' }],
                'preset-4': ['1rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }]
            },
            spacing: {
                8.75: '2.188rem',
                75.5: '18.875rem',
                87.5: '21.875rem'
            },
            borderRadius: {
                '15px': "0.938rem"
            }
        }
    }
}