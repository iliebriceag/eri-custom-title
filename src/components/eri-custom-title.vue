<template>
    <div class="myTit">
      <h2 class="fadeInDown" :style="{ 'color': `${textColor}` }">
        {{ myTitle }}
      </h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EriCustomTitle',
    props: {
      myTitle: {
        type: String,
        required: true,
      },
      textColor: {
        type: String,
        required: true,
      },
      borderColor: {
        type: String,
        required: true,
        default: '#ccc'
      },
      borderHeight: {
        type: String,
        required: true,
        default: '2px'
      },
    }
  };
  </script>
  
  <style scoped>
  .myTit {
    padding: 40px;
  }
  
  .myTit h2 {
    color: rgb(59, 59, 59);
    display: grid;
    text-align: center;
    text-transform: uppercase;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 16px 0;
    grid-gap: 22px;
    font-size: 27px;
    letter-spacing: 1px;
  }
  
  .myTit h2:after,
  .myTit h2:before {
    content: "";
    display: block;
    border-bottom: v-bind(borderHeight) solid v-bind(borderColor);
    background-color: transparent;
  }
  
  @media only screen and (max-width: 800px) {
    .myTit h2 {
      font-size: 20px;
    }
  }
  
  @media only screen and (max-width: 500px) {
    .myTit h2 {
      font-size: 16px;
    }
  }
  
  .fadeInDown {
    animation: fadeInDown 1s ease backwards;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  </style>      