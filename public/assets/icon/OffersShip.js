import React from "react";

const OffersShip = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M45.3189 3.32263C47.4617 8.74196 49.614 14.1575 51.7759 19.5692C52.2463 20.7466 51.9954 21.6959 51.0233 22.4171C51.0055 22.4305 50.991 22.4474 50.9809 22.4666C50.9708 22.4859 50.9653 22.507 50.9648 22.5283L50.9591 24.4455C50.9587 24.4827 50.9691 24.5194 50.989 24.5514C51.0089 24.5834 51.0376 24.6094 51.0717 24.6265C51.3986 24.7928 51.6808 25.0095 51.9184 25.2765C52.1493 25.5378 52.3204 25.8414 52.4316 26.1873C52.6938 27.0026 52.5703 27.7961 52.0609 28.5677C52.0429 28.5953 52.0335 28.6278 52.034 28.6608C52.0345 28.6938 52.0449 28.7259 52.0638 28.753L55.6458 33.7675C55.6736 33.8055 55.6886 33.8514 55.6886 33.8987L55.6971 40.082C55.6971 40.1028 55.6889 40.1227 55.6742 40.1374C55.6595 40.1521 55.6395 40.1604 55.6187 40.1604H43.1508C43.1232 40.1604 43.0968 40.1494 43.0773 40.1299C43.0577 40.1104 43.0468 40.0839 43.0468 40.0563V33.9044C43.0468 33.8525 43.0627 33.8021 43.0924 33.7604L47.1847 28.0375C47.2997 27.8778 47.3353 27.7015 47.2916 27.5086C47.2023 27.1143 47.2959 26.9485 47.5724 27.0112C48.134 26.9979 48.6951 27.0055 49.2558 27.034C49.2767 27.0353 49.2968 27.0426 49.3138 27.0549C49.3307 27.0673 49.3437 27.0843 49.3513 27.1038C49.5366 27.578 49.8473 27.6759 50.2835 27.3975C50.3234 27.3724 50.3543 27.3366 50.3719 27.2948C50.5752 26.8035 50.4142 26.5189 49.8887 26.441C49.3033 26.3536 48.9588 26.0448 48.8552 25.5145C48.8552 25.5145 48.8552 24.5286 48.8552 22.5568C48.8552 22.5344 48.8504 22.5122 48.841 22.4918C48.8317 22.4714 48.8181 22.4532 48.8011 22.4385L41.0641 15.5653C41.0542 15.5566 41.0427 15.5502 41.0301 15.5464C41.0176 15.5426 41.0044 15.5415 40.9914 15.5433C40.9784 15.545 40.966 15.5495 40.9549 15.5565C40.9438 15.5635 40.9344 15.5729 40.9272 15.5838L28.8513 33.9984C28.8428 34.0114 28.8371 34.026 28.8345 34.0414C28.832 34.0567 28.8327 34.0724 28.8366 34.0874C28.8405 34.1025 28.8475 34.1165 28.8571 34.1287C28.8668 34.1409 28.8789 34.1509 28.8927 34.1581C32.0979 35.8629 33.9984 38.5255 34.5942 42.146C34.5973 42.1648 34.5963 42.184 34.5912 42.2024C34.5861 42.2208 34.5771 42.2378 34.5647 42.2523C34.5524 42.2668 34.537 42.2785 34.5197 42.2865C34.5024 42.2944 34.4836 42.2985 34.4645 42.2985H13.6396C13.6218 42.2985 13.6042 42.2946 13.588 42.2872C13.5718 42.2798 13.5575 42.2691 13.546 42.2556C13.5344 42.2422 13.526 42.2264 13.5212 42.2095C13.5165 42.1925 13.5155 42.1747 13.5184 42.1574C13.7322 40.8128 14.137 39.5931 14.7328 38.4984C14.7398 38.4855 14.7442 38.4713 14.7457 38.4567C14.7472 38.4421 14.7457 38.4274 14.7415 38.4134C14.7373 38.3993 14.7303 38.3862 14.721 38.3749C14.7116 38.3636 14.7002 38.3542 14.6872 38.3473C13.221 37.5766 11.779 36.8084 10.3612 36.0424C9.57436 35.6177 9.17145 35.3987 9.15244 35.3853C8.89017 35.1886 8.68064 34.9435 8.52384 34.6498C8.36895 34.361 8.28533 34.0564 8.27297 33.7362C8.25112 33.1651 8.45162 32.6581 8.87449 32.2153C9.32681 31.743 9.90029 31.5297 10.5949 31.5753C10.6386 31.5784 10.6826 31.5709 10.7232 31.5536C10.7638 31.5363 10.8 31.5095 10.8287 31.4755C17.6677 23.3147 24.4664 15.2013 31.2246 7.13554C31.3709 6.96165 31.4997 6.82101 31.6109 6.71363C31.7287 6.60055 31.8926 6.51027 32.1026 6.4428C35.9968 5.18751 39.8943 3.94267 43.7951 2.70828C44.5411 2.43651 45.049 2.64129 45.3189 3.32263ZM40.3229 9.86232L42.327 5.45358C42.3507 5.40037 42.335 5.38279 42.2799 5.40084L35.0347 7.7171C34.9453 7.74561 34.9411 7.78362 35.0218 7.83113L39.1156 10.2201C39.1428 10.236 39.1737 10.2444 39.205 10.2444C39.2364 10.2444 39.267 10.236 39.2937 10.2201C39.5722 10.0519 39.8767 9.95924 40.2074 9.94214C40.2319 9.9408 40.2556 9.93265 40.2759 9.91858C40.2963 9.90451 40.3125 9.88505 40.3229 9.86232ZM46.6986 14.951C47.0958 15.3007 47.4969 15.6589 47.9017 16.0257C48.105 16.2091 48.1559 16.1735 48.0542 15.9188L44.3083 6.50267C44.2626 6.38674 44.2137 6.38579 44.1614 6.49982L42.3255 10.5494C42.221 10.7784 42.2614 10.977 42.4467 11.1452C43.8664 12.4366 45.2837 13.7052 46.6986 14.951ZM15.4227 33.9657C16.0879 34.3239 16.7821 34.6921 17.5052 35.0703C17.5408 35.0892 17.5808 35.098 17.6208 35.0957C17.6607 35.0934 17.6992 35.0802 17.7319 35.0575C19.1839 34.0483 20.7299 33.3984 22.3701 33.1076C22.4158 33.0993 22.4562 33.0743 22.4827 33.0377L37.7443 11.9933C37.7537 11.9803 37.7603 11.9655 37.7635 11.9498C37.7668 11.9341 37.7666 11.9178 37.7631 11.9021C37.7596 11.8863 37.7528 11.8715 37.7432 11.8585C37.7336 11.8454 37.7214 11.8346 37.7073 11.8265L32.6742 8.91015C32.6382 8.88942 32.596 8.88206 32.5551 8.88936C32.5141 8.89666 32.4771 8.91815 32.4504 8.95006L12.7672 32.4462C12.7595 32.4552 12.7539 32.4659 12.7508 32.4774C12.7478 32.4889 12.7475 32.501 12.7498 32.5127C12.7521 32.5244 12.7571 32.5354 12.7643 32.5448C12.7715 32.5543 12.7808 32.562 12.7915 32.5674C13.6952 33.0425 14.5722 33.5086 15.4227 33.9657ZM49.6834 29.6752C49.4487 29.6353 49.1717 29.5683 48.8524 29.4743C48.8237 29.4659 48.7932 29.4668 48.7651 29.4768C48.7369 29.4868 48.7126 29.5053 48.6956 29.5298L45.708 33.7333C45.6472 33.8198 45.6695 33.8626 45.775 33.8616L52.9846 33.8531C53.072 33.8531 53.0906 33.8174 53.0402 33.7461L50.1894 29.7693C50.1759 29.7504 50.1588 29.7345 50.1392 29.7224C50.1196 29.7104 50.0979 29.7026 50.0754 29.6995C49.9461 29.6805 49.8155 29.6724 49.6834 29.6752ZM47.2543 36.0406C47.2543 36.0294 47.252 36.0183 47.2477 36.0079C47.2434 35.9975 47.2371 35.9881 47.2291 35.9802C47.2212 35.9723 47.2117 35.966 47.2013 35.9617C47.191 35.9574 47.1798 35.9552 47.1686 35.9552L45.2329 35.9586C45.2217 35.9586 45.2106 35.9609 45.2002 35.9652C45.1898 35.9695 45.1804 35.9758 45.1725 35.9838C45.1646 35.9917 45.1583 36.0012 45.154 36.0116C45.1497 36.0219 45.1475 36.0331 45.1476 36.0443L45.1509 37.9743C45.1509 37.9855 45.1532 37.9966 45.1575 38.007C45.1618 38.0174 45.1681 38.0268 45.1761 38.0347C45.184 38.0426 45.1935 38.0489 45.2039 38.0532C45.2142 38.0575 45.2254 38.0597 45.2366 38.0596L47.1723 38.0563C47.1835 38.0562 47.1946 38.054 47.205 38.0497C47.2153 38.0454 47.2248 38.0391 47.2327 38.0311C47.2406 38.0231 47.2469 38.0137 47.2512 38.0033C47.2555 37.9929 47.2577 37.9818 47.2576 37.9706L47.2543 36.0406ZM50.4229 36.0278C50.4229 36.0181 50.4209 36.0084 50.4172 35.9994C50.4135 35.9904 50.408 35.9823 50.4011 35.9754C50.3942 35.9685 50.386 35.9631 50.377 35.9594C50.368 35.9557 50.3584 35.9538 50.3486 35.9538L48.393 35.9572C48.3833 35.9572 48.3736 35.9592 48.3647 35.9629C48.3557 35.9666 48.3475 35.9721 48.3406 35.979C48.3338 35.9859 48.3283 35.9941 48.3246 36.0031C48.3209 36.0121 48.319 36.0217 48.319 36.0315L48.3224 37.9871C48.3225 37.9968 48.3244 38.0065 48.3281 38.0154C48.3319 38.0244 48.3373 38.0326 48.3442 38.0395C48.3511 38.0463 48.3593 38.0518 48.3683 38.0555C48.3773 38.0592 48.387 38.0611 48.3967 38.0611L50.3523 38.0577C50.3621 38.0576 50.3717 38.0557 50.3807 38.052C50.3897 38.0482 50.3978 38.0428 50.4047 38.0359C50.4116 38.029 50.417 38.0208 50.4207 38.0118C50.4244 38.0028 50.4263 37.9932 50.4263 37.9834L50.4229 36.0278ZM53.5964 36.0258C53.5964 36.017 53.5947 36.0082 53.5913 36.0001C53.588 35.992 53.583 35.9846 53.5768 35.9784C53.5706 35.9721 53.5633 35.9672 53.5551 35.9638C53.547 35.9604 53.5383 35.9587 53.5295 35.9587L51.5539 35.9552C51.5451 35.9552 51.5364 35.9569 51.5283 35.9603C51.5201 35.9636 51.5127 35.9685 51.5065 35.9747C51.5003 35.981 51.4953 35.9883 51.492 35.9965C51.4886 36.0046 51.4868 36.0133 51.4868 36.0221L51.4834 37.9891C51.4833 38.0069 51.4904 38.0239 51.5029 38.0365C51.5155 38.0491 51.5325 38.0562 51.5502 38.0562L53.5259 38.0597C53.5346 38.0597 53.5434 38.058 53.5515 38.0546C53.5596 38.0513 53.567 38.0463 53.5733 38.0401C53.5795 38.0339 53.5844 38.0265 53.5878 38.0184C53.5912 38.0103 53.5929 38.0016 53.593 37.9928L53.5964 36.0258Z'
        fill='currentColor'
      />
      <path
        d='M51.2157 42.8059C51.4495 42.765 51.7322 42.7826 52.0638 42.8586C52.2919 42.9118 52.4111 42.9394 52.4216 42.9413C56.0392 43.6986 59.1874 45.3801 61.8662 47.9857C61.9147 48.0329 61.9527 48.0896 61.9777 48.1522C62.0028 48.2148 62.0143 48.2819 62.0116 48.3492C61.8605 51.8557 60.7957 55.0557 58.8173 57.9492C58.7441 58.0556 58.7722 58.1122 58.9014 58.1188C59.5001 58.1492 60.1424 58.1687 60.8285 58.1773C61.3341 58.183 61.6833 58.3654 61.8762 58.7246C62.0577 59.0638 62.062 59.4045 61.889 59.7466C61.6942 60.1334 61.317 60.3158 60.7573 60.294C57.055 60.1486 53.2882 60.1985 49.4568 60.4436C47.9753 60.5387 47.027 60.5914 46.6117 60.6018C42.6615 60.7054 38.7635 60.3087 34.9178 59.4116C33.195 59.0087 32.3336 58.8073 32.3336 58.8073C27.0587 57.7648 21.9377 58.1088 16.9707 59.8393C12.6651 61.3397 8.37466 61.6405 4.09944 60.7415C3.72599 60.6636 3.44947 60.5377 3.26987 60.3638C2.8356 59.9438 2.85936 59.4425 3.34114 58.86C3.53594 58.6234 3.84335 58.5517 4.26336 58.6448C5.89876 59.0059 7.55459 59.1755 9.23085 59.1536C9.24723 59.1533 9.26281 59.1467 9.27426 59.1352C9.28572 59.1237 9.29214 59.1084 9.29214 59.0924C9.30069 56.1418 9.30402 53.187 9.30212 50.2279C9.30117 48.8272 9.33015 47.9857 9.38907 47.7035C9.57342 46.8236 10.0219 46.07 10.7346 45.4428C11.3295 44.9202 12.0075 44.5923 12.7687 44.4593C12.9939 44.4203 13.7246 44.4009 14.9609 44.4009C28.2446 44.4009 34.8864 44.4009 34.8864 44.4009C36.5152 44.5767 37.6883 45.3754 38.4057 46.7969C38.6804 47.3433 38.8172 47.9582 38.8162 48.6414C38.8096 51.6822 38.8063 54.772 38.8063 57.9107C38.8063 57.9404 38.8169 57.9691 38.8363 57.9916C38.8556 58.0141 38.8824 58.0289 38.9117 58.0333C40.798 58.3108 42.6339 58.4676 44.4194 58.5037C44.4936 58.5046 44.5083 58.4752 44.4636 58.4153C42.2799 55.4666 41.1049 52.1084 40.9386 48.3406C40.936 48.2752 40.9472 48.21 40.9715 48.1494C40.9958 48.0887 41.0327 48.0339 41.0798 47.9886C43.9429 45.2176 47.3215 43.49 51.2157 42.8059ZM52.5271 46.174C52.5271 45.9007 52.4185 45.6386 52.2252 45.4453C52.032 45.2521 51.7698 45.1435 51.4965 45.1435H51.4537C51.1804 45.1435 50.9183 45.2521 50.725 45.4453C50.5318 45.6386 50.4232 45.9007 50.4232 46.174V57.2294C50.4232 57.5027 50.5318 57.7648 50.725 57.9581C50.9183 58.1514 51.1804 58.2599 51.4537 58.2599H51.4965C51.7698 58.2599 52.032 58.1514 52.2252 57.9581C52.4185 57.7648 52.5271 57.5027 52.5271 57.2294V46.174ZM27.5001 56.1546C29.1108 56.1993 30.7438 56.3708 32.3991 56.6692C32.4113 56.6715 32.4238 56.6711 32.4358 56.668C32.4478 56.6649 32.4589 56.6592 32.4685 56.6513C32.478 56.6434 32.4857 56.6335 32.4909 56.6223C32.4962 56.6111 32.4989 56.5989 32.4989 56.5865V50.8394C32.4989 50.8046 32.4851 50.7712 32.4605 50.7466C32.4359 50.722 32.4026 50.7082 32.3678 50.7082H15.742C15.7065 50.7082 15.6724 50.7223 15.6473 50.7475C15.6222 50.7726 15.608 50.8067 15.608 50.8422V57.9806C15.6081 57.9927 15.611 58.0047 15.6165 58.0154C15.6221 58.0262 15.6301 58.0355 15.6399 58.0425C15.6497 58.0495 15.6609 58.054 15.6728 58.0556C15.6846 58.0573 15.6966 58.0559 15.7078 58.0518C19.5174 56.6749 23.4482 56.0425 27.5001 56.1546Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default OffersShip;
