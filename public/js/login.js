/* eslint-disable no-undef */
const login = async (email, password) => {
    let headers;

    // headers['Access-Control-Allow-Origin'] = '*';
    // headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE,OPTIONS';
    // const allow_headers = 'Referer,Accept,Origin,User-Agent,Content-Type';
    // headers['Access-Control-Allow-Headers'] = allow_headers;
    try {
        const res = await axios.post(
            '/api/v1/users/login',
            {
                email,
                password,
            },
            {
                headers,
            }
        );
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    login(email, password);
});
