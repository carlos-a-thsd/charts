<template>
    <div class="widget col-lg-12 col-md-12 col-xs-12 col-xl-12 p-1">
        <div class="widget widget-dark-border" style="height: 200px; width: 300px;">
            <div>
                <div class="head">
                    <div class="text-center">
                        <h6 style="font-size:18px;"> Estado: {{ estado }}</h6>
                    </div>
                </div>
                <div class="body" style="height: 200px;">
                    <div class="row text-center">
                        <div class="col-12">
                            <div class="circle button" id="button-0">
                                <img class="icono" src="src/assets/check.png" />
                            </div>
                            <div class="mt-2" style="width:70%;height:80px;"></div>
                            <br />
                        </div>
                        <div class="col-12 pe-1">
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Estatus',
    props: {
        estado: String
    }
};
</script>

<style scoped>
.circle {
    width: 70px;
    height: 70px;
    background: linear-gradient(to bottom, #4CAF50, #4CAF50);
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    position: relative;
}

.circle::before,
.circle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border: 10px solid linear-gradient(to bottom, #4CAF50, #4CAF50); /* Gradiente de verde a verde */
    border-radius: 100%;
    animation: latido linear 3s infinite;
}

.circle::after {
    animation-delay: -1.5s;
}

@keyframes latido {
    0% {
        width: 80px;
        height: 80px;
        border: 10px solid #4CAF50; /* Gradiente de verde a verde */
    }

    100% {
        width: 120px;
        height: 120px;
        border: 10px solid transparent;
    }
}

.icono {
    opacity: .70;
    width: 80px;
    height: 75px;
    margin-top: -2px;
    margin-left: -5px;
}

#button-0 {
    top: 80px;
    left: 100px;
    margin-top: -50px;
    margin-bottom: -20px;
}


.widget-dark-border {
  border: 2px dotted #333; /* Cambia el color del borde oscuro según tus preferencias */
  padding: 10px; /* Añade un poco de espacio dentro del borde */
}
</style>
