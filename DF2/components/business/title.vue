<template>
    <div class="title">
        <h3>{{title}}</h3>

    </div>
</template>
<script>
export default {
    props : {
        title:{
            default :'',
            type:String
        }
    }
}
</script>
<style scoped>
.title{
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAPCAYAAABzyUiPAAADHUlEQVRYhd3YT2gdVRQG8F+aVFqUWmtFjcqs3BR0IygkzeK6stqNguD2Iq5Uin/aUq0x1lRLiwYqLgRhcGXFRUEhxW4GjU1R0UVBV3VxNShCGq1YLLRJXMxNHSfv0WL0RfxgYOB8c+65H+ece8/0jY2N+a8ihTiKvqIqX1rtWLphYDUWTSFejSHchp/wWVGVsy3OKJ7BYgpxsajKfS37ZtyDG/E9pouqPNeL+Jvo62UGphD7sQt7cBHf4SZch7ewp6jKcynEF/AstuVPj+G1oir3pRA34BU8hp/xIwp1MhzAwaIqL/ZqTz0TMIv3Pu7CE5gsqnI+20ZwGPM4jsexrajK6WwfUov4plrURewoqnKq4fsBvIEv8fCS738ba3qxSMYO3I3hoio/bG4wC7EVN2TeJfGyfVot3A5swsiSeNk+X1TlBxjOazzZg/2gRwI2SndnUZUzXWhPqcW5Cqc72E9n26bMXYbsexd2pxB7sreBFOK1Ogv5a6PErsHaFaxzh7rPHe1kTCHuxU7ch3cQ8F6Ldi++xaM4lg+W/R3cHUWJoRTi1yuI+UJRlb/l+PqxoQNnYQ1OYa7Ds6VBPNKFc6XPx5gtqvJ8O4IU4la8jOeLqjyBGXUpt7EZM5nzHMZTiMNtUlGVv2MWUyuM+UjD7ZYunFMDuFOXDGy8P2LlGXg8hbiuLWJRlZ/mDBxPIX6FW9UCtDGLW/KBMo69Wcy/IIW4Ti32CFaUgY33b9Sto42FgaIqz17O01Iq/12kEE/gLB7Eux38708h9uEjrFdnTxtTuD1zDnQpX3hInR3TRVUurCTuRnzz6ivTMvSk0eYADuFQCvHmLrQJ9cbPq+91y9xk21zmLkMKcRAH1XfBf0S8y6GX15gJfI6TKcTtuTHjUh/8RF2mhzGZS3XJPoTJbJvDVLP/pRD7U4jbcRJfZF5PsJqTyAUkDGIj3sbuPImM4mncnz+dxOuNSeRV9SQyhx/U2bnW/3kSaSKFuF49Cw/ijLpf/dLivOjP+95E+4dCCnFj9nG9WsTpfAL3FKsi4JUii9hXVOXYasfSDX8AJpZTZxoal9gAAAAASUVORK5CYII=');
    background-repeat: no-repeat;
    background-position: bottom;
    font-size: 32px;
    margin: 88px 0 56px;
    padding-bottom: 48px;
    text-align: center;
}
</style>
