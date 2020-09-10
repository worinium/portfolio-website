<template>
<section id="footer">
    <div class="footer containercustom">
        <div class="brand">
            <h1><span>S</span>haif <span>A</span>rfan</h1>
        </div>
        <h2>Your Complete Web Solution</h2>
        <div class="social-icon">
            <div class="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
            </div>
            <div class="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
            </div>
            <div class="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" /></a>
            </div>
            <div class="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
            </div>
            <div class="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/github.png" /></a>
            </div>
            <div class="social-item">
                <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/github.png" /></a>
            </div>
        </div>
        {{ new Date().getFullYear() }} —
        <strong>Alapher W. Hearty</strong>
    </div>
</section>
</template>

<script>
export default {};
</script>

<style>
/* Footer */
.container-custom {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer {
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}

#footer .footer {
    min-height: 200px;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 10px;
}

#footer h2 {
    color: white;
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: .1rem;
    margin-top: 10px;
    margin-bottom: 10px;
}

#footer .social-icon {
    display: flex;
    margin-bottom: 30px;
}

#footer .social-item {
    height: 50px;
    width: 50px;
    margin: 0 5px;
}

#footer .social-item img {
    filter: grayscale(1);
    transition: .3s ease filter;
}

#footer .social-item:hover img {
    filter: grayscale(0);
}

#footer p {
    color: white;
    font-size: 1.3rem;
}

/* End Footer */
</style>
