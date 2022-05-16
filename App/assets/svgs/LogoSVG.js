const svg = `
<svg width="144" height="126" viewBox="0 0 144 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7863 102.51H16.0116V103.266C16.0116 105.971 15.5509 107.658 14.6295 108.328C13.7081 108.998 11.3959 109.337 7.68417 109.337C4.36364 109.337 2.25136 108.745 1.34734 107.554C0.45201 106.38 0 103.588 0 99.1876C0 95.7523 0.10431 93.5868 0.304238 92.6997C0.504165 91.8127 1.08656 91.0213 2.05143 90.3255C3.17276 89.508 5.59797 89.1079 9.32705 89.1079C11.8566 89.1079 13.5603 89.4993 14.4382 90.282C15.3162 91.0647 15.7508 92.5867 15.7508 94.8305L15.7682 95.3697H13.5429L13.5255 94.7609C13.5255 93.1607 13.2648 92.1344 12.7519 91.6822C12.2304 91.23 11.0656 90.9952 9.24013 90.9952C6.04129 90.9952 4.09417 91.2648 3.38138 91.7953C2.6686 92.3258 2.3209 93.8042 2.3209 96.2307C2.3209 101.805 2.5556 105.067 3.03368 106.023C3.51177 106.98 5.12858 107.458 7.90148 107.458C10.5353 107.458 12.1782 107.25 12.8301 106.832C13.4821 106.415 13.8124 105.371 13.8124 103.693L13.7863 102.51Z" fill="white"/>
<path d="M36.8474 89.2993V109.137H34.6135V99.9355H23.0177V109.137H20.7837V89.2993H23.0177V98.0483H34.6135V89.2993H36.8474Z" fill="white"/>
<path d="M55.3019 104.945H45.2707L43.7408 109.146H41.3765L48.6434 89.308H51.7814L59.1874 109.146H56.8491L55.3019 104.945ZM54.6499 103.258L50.2515 91.1343L45.9053 103.258H54.6499Z" fill="white"/>
<path d="M85.4732 89.2993V109.137H83.2392V93.265V92.0736L83.2566 91.4735L83.274 90.8734H83.2131L83.0392 91.3343C82.9523 91.5691 82.8915 91.717 82.8654 91.7866L82.4916 92.7171L75.7375 109.128H73.5036L66.7321 92.9085L66.341 91.9953L66.1671 91.5343C66.115 91.43 66.0628 91.2734 65.9933 91.0821H65.9324L65.9498 91.6213L65.9672 92.1779V93.265V109.137H63.7158V89.2993H67.5927L72.8777 102.136L73.7209 104.214L74.1468 105.249L74.5554 106.284H74.6162L75.0248 105.249C75.2247 104.754 75.3638 104.414 75.4333 104.214L76.2939 102.153L81.5528 89.308H85.4732V89.2993Z" fill="white"/>
<path d="M91.1323 109.137V89.2993H99.9031C102.337 89.2993 103.928 89.6297 104.675 90.2994C105.423 90.9691 105.805 92.3866 105.805 94.5435C105.805 96.7438 104.962 98.1353 103.267 98.718V98.7614C105.371 99.2658 106.422 100.823 106.422 103.423C106.422 105.528 106.005 107.006 105.179 107.858C104.354 108.711 102.911 109.137 100.859 109.137H91.1323ZM93.375 98.0222H99.2598C101.129 98.0222 102.328 97.7961 102.867 97.3525C103.406 96.909 103.676 95.9176 103.676 94.3695C103.676 93.0302 103.441 92.1692 102.972 91.7779C102.502 91.3865 101.468 91.1865 99.8683 91.1865H93.375V98.0222ZM93.375 107.25H98.1211L100.138 107.232C101.841 107.232 102.963 107.015 103.484 106.571C104.015 106.128 104.275 105.197 104.275 103.771C104.275 101.997 104.006 100.91 103.476 100.51C102.945 100.109 101.494 99.9094 99.1294 99.9094H93.3663V107.25H93.375Z" fill="white"/>
<path d="M113.315 91.1952V97.9526H123.381V99.8398H113.315V107.25H123.816V109.137H111.073V89.2993H123.816V91.1865H113.315V91.1952Z" fill="white"/>
<path d="M128.745 109.137V89.2993H138.185C140.314 89.2993 141.818 89.7167 142.687 90.5603C143.557 91.4039 143.991 92.865 143.991 94.9522C143.991 96.7872 143.757 98.057 143.278 98.7788C142.8 99.5007 141.896 99.9703 140.558 100.179V100.223C142.661 100.379 143.713 101.657 143.713 104.058V109.128H141.479V104.562C141.479 102.249 140.48 101.092 138.472 101.092H137.733H130.979V109.128H128.745V109.137ZM130.987 99.2137H137.455C139.158 99.2137 140.323 98.9528 140.94 98.4397C141.557 97.9178 141.87 96.9438 141.87 95.5088C141.87 93.7173 141.644 92.5519 141.184 92.004C140.723 91.4648 139.741 91.1865 138.228 91.1865H130.996V99.2137H130.987Z" fill="white"/>
<path d="M28.0071 123.487V125.904H27.4681V123.487L25.4775 120.669H26.0947L27.216 122.26C27.3899 122.504 27.5898 122.791 27.755 123.06H27.7724C27.9375 122.808 28.1461 122.513 28.3113 122.26L29.4413 120.669H30.015L28.0071 123.487Z" fill="white"/>
<path d="M33.805 126C32.3621 126 31.0669 124.904 31.0669 123.287C31.0669 121.669 32.3621 120.591 33.805 120.591C35.248 120.591 36.5432 121.678 36.5432 123.287C36.5432 124.904 35.248 126 33.805 126ZM33.805 121.069C32.6576 121.069 31.6232 121.947 31.6232 123.295C31.6232 124.643 32.6576 125.522 33.805 125.522C34.9438 125.522 35.9869 124.643 35.9869 123.295C35.9869 121.947 34.9438 121.069 33.805 121.069Z" fill="white"/>
<path d="M40.4636 126C39.2467 126 38.4209 125.287 38.4209 124.095V120.677H38.9685V124.052C38.9685 124.965 39.5248 125.513 40.4723 125.513C41.4111 125.513 41.9761 124.965 41.9761 124.052V120.677H42.5064V124.095C42.5064 125.278 41.6806 126 40.4636 126Z" fill="white"/>
<path d="M47.7824 125.904L46.0439 123.504H45.2268V125.904H44.6792V120.669H46.1222C46.9219 120.669 47.652 121.191 47.652 122.086C47.652 122.765 47.2174 123.26 46.6263 123.426L48.4604 125.904H47.7824ZM46.0265 121.156H45.2181V123.043H46.0352C46.6002 123.043 47.087 122.695 47.087 122.095C47.0957 121.504 46.6002 121.156 46.0265 121.156Z" fill="white"/>
<path d="M53.6675 125.948C53.0677 125.948 52.5896 125.756 52.2941 125.556L52.2158 124.956C52.5896 125.261 53.0851 125.469 53.6849 125.469C54.3281 125.469 54.7888 125.096 54.7888 124.522C54.7888 123.974 54.4672 123.669 53.7457 123.408C52.8243 123.078 52.3897 122.634 52.3897 121.921C52.3897 121.269 52.8765 120.617 53.9196 120.617C54.3976 120.617 54.8062 120.773 55.0148 120.912L54.8931 121.382C54.6932 121.234 54.2933 121.078 53.9022 121.078C53.2589 121.078 52.9199 121.478 52.9199 121.886C52.9199 122.33 53.2155 122.617 53.8587 122.852C54.7801 123.191 55.3364 123.608 55.3364 124.478C55.3451 125.374 54.6932 125.948 53.6675 125.948Z" fill="white"/>
<path d="M57.2314 125.904V120.669H57.7791V125.904H57.2314Z" fill="white"/>
<path d="M59.9868 125.904V120.669H60.5344V125.426H62.9683V125.904H59.9868Z" fill="white"/>
<path d="M64.5767 125.904V120.669H67.3061V121.147H65.1243V123.034H66.9149V123.513H65.1243V125.435H67.593V125.913H64.5767V125.904Z" fill="white"/>
<path d="M73.5729 125.991L71.0173 123.078C70.5914 122.591 70.1046 122.008 69.7482 121.565L69.7308 121.573C69.7482 122.06 69.7482 122.539 69.7482 123.017V125.904H69.1919V120.669H69.5744L71.9996 123.443C72.356 123.843 72.8341 124.408 73.1818 124.843L73.1991 124.835C73.1818 124.365 73.1818 123.895 73.1818 123.452V120.66H73.7294V125.974H73.5729V125.991Z" fill="white"/>
<path d="M77.6849 121.147V125.904H77.1372V121.147H75.3379V120.669H79.4842V121.147H77.6849Z" fill="white"/>
<path d="M85.2558 123.513H84.2648V125.913H83.7085V120.677H85.2384C86.0381 120.677 86.7682 121.199 86.7682 122.095C86.7682 122.982 86.0381 123.513 85.2558 123.513ZM85.1514 121.156H84.2648V123.043H85.1688C85.7338 123.043 86.2206 122.695 86.2206 122.095C86.2119 121.504 85.7252 121.156 85.1514 121.156Z" fill="white"/>
<path d="M91.6446 125.904L91.0449 124.435H88.837L88.2459 125.904H87.6982L89.8453 120.591H90.0539L92.201 125.904H91.6446ZM90.2278 122.373C90.1408 122.139 90.0278 121.852 89.9496 121.573H89.9322C89.854 121.852 89.741 122.139 89.6541 122.373L89.0195 123.982H90.8449L90.2278 122.373Z" fill="white"/>
<path d="M96.9992 125.904L95.2607 123.504H94.4436V125.904H93.896V120.669H95.339C96.1387 120.669 96.8688 121.191 96.8688 122.086C96.8688 122.765 96.4342 123.26 95.8431 123.426L97.6772 125.904H96.9992ZM95.2433 121.156H94.4349V123.043H95.252C95.817 123.043 96.3038 122.695 96.3038 122.095C96.3125 121.504 95.817 121.156 95.2433 121.156Z" fill="white"/>
<path d="M100.702 121.147V125.904H100.155V121.147H98.3555V120.669H102.502V121.147H100.702Z" fill="white"/>
<path d="M108.491 125.991L105.935 123.078C105.509 122.591 105.023 122.008 104.666 121.565L104.649 121.573C104.666 122.06 104.666 122.539 104.666 123.017V125.904H104.119V120.669H104.501L106.926 123.443C107.283 123.843 107.761 124.408 108.109 124.843L108.126 124.835C108.109 124.365 108.109 123.895 108.109 123.452V120.66H108.656V125.974H108.491V125.991Z" fill="white"/>
<path d="M110.829 125.904V120.669H113.559V121.147H111.377V123.034H113.167V123.513H111.377V125.435H113.845V125.913H110.829V125.904Z" fill="white"/>
<path d="M118.557 125.904L116.818 123.504H116.001V125.904H115.454V120.669H116.897C117.696 120.669 118.426 121.191 118.426 122.086C118.426 122.765 117.992 123.26 117.401 123.426L119.235 125.904H118.557ZM116.801 121.156H115.993V123.043H116.81C117.375 123.043 117.861 122.695 117.861 122.095C117.87 121.504 117.375 121.156 116.801 121.156Z" fill="white"/>
<path d="M47.9737 79.7327H1.07764V80.2458H47.9737V79.7327Z" fill="white"/>
<path d="M143.974 79.7327H97.0776V80.2458H143.974V79.7327Z" fill="white"/>
<path d="M93.5489 17.2198C90.7586 16.8893 87.977 17.4981 85.5952 18.8548L88.4985 23.9859C89.8111 23.2467 91.341 22.9249 92.8708 23.1075C96.8868 23.5859 99.7727 27.3081 99.3033 31.3956C99.0251 33.8047 97.643 35.8136 95.7394 36.9616L98.747 42.0406C102.137 39.9794 104.588 36.3876 105.084 32.0827C105.927 24.7513 100.746 18.0721 93.5489 17.2198Z" fill="white"/>
<path d="M49.1647 36.6833C46.5135 35.2918 44.6185 32.074 44.9836 28.8909C45.453 24.7947 49.1039 21.8552 53.1111 22.3335C56.6229 22.751 65.5675 28.7953 70.3831 32.5088C72.2868 33.9786 80.7098 40.336 87.0032 42.8581L81.6747 33.2481C78.8235 31.413 75.9724 29.378 73.8949 27.7777C71.6087 26.0123 59.8826 17.1676 53.7891 16.437C46.5917 15.5848 40.0463 20.855 39.2031 28.1952C38.5685 33.7612 41.5935 39.2054 46.1658 41.771L49.1647 36.6833Z" fill="white"/>
<path d="M101.363 51.6071L72.1475 0L62.2642 17.4546L67.2537 20.4985L72.1475 11.8625L91.2884 45.6759H52.9979L62.2033 29.4128L57.2051 26.3776L42.9233 51.6071L77.7194 62.0694L81.0052 51.6071H101.363Z" fill="white"/>
<path d="M65.5586 76.1323C65.7412 75.8279 65.8629 75.567 65.8629 75.567C65.7933 75.4974 64.6807 75.3147 64.4286 75.3147C63.8115 75.3147 63.1074 75.4974 62.6901 75.8192C62.5597 75.9235 62.4728 75.967 62.4033 75.967C62.3685 75.967 62.3337 75.9496 62.3337 75.88C62.2816 75.68 62.5684 75.3756 63.0378 75.1582C63.5854 74.906 64.0896 74.7755 64.672 74.7755C65.1066 74.7755 65.576 74.8451 66.141 74.993C66.228 74.993 66.254 74.993 66.2888 74.906C66.5409 74.4711 68.1056 71.9491 68.6097 71.9491C68.7575 71.9491 68.8444 72.0795 68.8096 72.2013C68.7923 72.2535 68.4446 72.8883 67.2276 75.0364C67.1754 75.1495 67.1146 75.2365 67.132 75.2365C67.245 75.3495 68.3489 75.3843 68.6184 75.3843C69.6528 75.3843 70.3917 75.2191 71.4435 74.8016C71.7738 74.6712 71.9476 74.619 72.0433 74.619C72.1128 74.619 72.1302 74.6364 72.1563 74.6886C72.191 74.7755 72.1215 74.8712 71.9216 75.0017C70.9393 75.6539 69.3833 75.8887 68.2012 75.8887C67.8709 75.8887 67.5666 75.8887 67.3319 75.854C67.0972 75.8192 66.8625 75.8018 66.8451 75.8018C66.7582 75.8018 65.6282 77.9238 65.1066 79.0892C64.0201 81.5417 63.4203 83.7855 63.6898 84.4812C63.7767 84.6987 63.8897 84.7943 64.1244 84.7943C64.4547 84.7943 64.6894 84.6291 65.1936 84.1247C65.5152 83.7942 65.776 83.4898 66.2801 82.8201C66.7321 82.2201 69.3312 78.7935 69.8527 78.7935C69.9223 78.7935 69.9831 78.8457 69.9831 78.9413C69.9831 79.0283 69.9136 79.124 69.6789 79.3762C68.6097 80.5763 67.5753 81.8287 66.6104 83.1158C65.6716 84.3682 65.124 84.9161 64.5938 85.1683C64.4286 85.2379 64.2113 85.2987 64.0114 85.2987C63.4464 85.2987 63.1247 84.8117 63.0291 84.2986C62.751 82.8114 63.8723 79.1675 65.5586 76.1323Z" fill="white"/>
<path d="M72.4168 82.2288C72.3473 82.0809 72.3473 81.9939 72.3212 81.6113C72.3038 81.046 72.3386 80.7242 72.5385 79.7415C72.6341 79.324 72.6863 78.924 72.6863 78.8718C72.6863 78.7674 72.6863 78.7413 72.5907 78.7413C71.8866 78.7413 69.9829 80.7764 69.6526 81.3156C69.5222 81.5156 69.4005 81.6287 69.2702 81.6287C69.218 81.6287 69.1571 81.6113 69.105 81.5591C69.0181 81.4721 69.0181 81.446 69.0355 81.2895C69.0876 80.672 70.122 77.8977 70.887 76.2627C71.4172 75.1234 73.4426 71.2881 74.9811 71.2881C75.2158 71.2881 75.4157 71.4012 75.5288 71.6012C75.7113 71.9056 75.6157 72.4013 75.2767 73.1058C74.7899 74.0276 73.9728 75.1582 73.0253 76.1931C72.5559 76.7236 71.591 77.6803 71.3563 77.8803C71.139 78.0456 71.0869 78.1325 70.6088 79.1849C70.4089 79.6197 70.3219 79.7849 70.3567 79.7849C70.3741 79.7849 70.4697 79.698 70.6088 79.5675C71.0434 79.1675 72.1648 78.1499 72.8254 78.1499C73.4252 78.1499 73.5556 78.7674 73.5729 79.237C73.5729 79.7415 73.5208 80.1589 73.3556 80.9068C73.1557 81.7243 73.1209 81.9244 73.1731 82.0287C73.1905 82.0809 73.1905 82.1157 73.2426 82.1157C74.1119 82.1157 75.9982 80.2633 76.6327 79.5066C77.1369 78.9239 77.2499 78.8196 77.3368 78.7848C77.3716 78.7674 77.4063 78.7674 77.4324 78.7674C77.4498 78.7674 77.4672 78.7674 77.502 78.8022C77.6497 78.9326 77.5715 79.0544 77.0673 79.7241C76.4328 80.5242 74.2423 82.7506 73.1296 82.7506C73.0601 82.7506 72.9645 82.7332 72.8949 82.7158C72.7037 82.6462 72.5038 82.4462 72.4168 82.2288ZM75.1897 72.036C75.1897 71.8534 75.1376 71.7664 75.0246 71.7664C74.1206 71.7664 72.3038 75.5931 71.9996 76.2279C71.7997 76.6454 71.6345 77.0106 71.6345 77.028C71.6345 77.0628 72.4864 76.1584 72.921 75.6626C74.1553 74.2277 75.155 72.6361 75.1897 72.036Z" fill="white"/>
<path d="M77.5628 78.4021C78.1452 77.6803 78.8841 77.2628 79.5186 77.2628C79.7533 77.2628 79.9706 77.315 80.1705 77.4455C80.5356 77.6629 80.6399 78.063 80.4574 78.4456C80.1879 79.0283 79.1014 79.6632 78.1886 79.7328C78.0583 79.7502 77.954 79.7675 77.9366 79.7849C77.8236 79.8719 77.7714 80.4372 77.867 80.6198C77.9974 80.8547 78.3712 81.0025 78.8667 81.0025C80.2835 81.0025 81.657 80.0371 82.7522 79.2196C83.0564 79.0022 83.3346 78.8022 83.3694 78.7848C83.3868 78.7848 83.4041 78.7674 83.4215 78.7674C83.4911 78.7674 83.5693 78.837 83.5693 78.9153C83.5693 79.0979 82.787 79.7675 81.8308 80.4024C80.8833 81.0199 79.7446 81.5678 78.5798 81.5678C78.3451 81.5678 78.1278 81.5678 77.98 81.533C76.7109 81.2112 76.511 79.7067 77.5628 78.4021ZM79.7794 77.9847C79.3969 77.9847 79.1274 78.1847 78.858 78.4369C78.6233 78.6544 78.2408 79.124 78.1886 79.2718C78.1713 79.3066 78.1886 79.324 78.2234 79.324C78.6928 79.324 79.4925 78.8892 79.8228 78.5761C80.1792 78.2369 80.1618 77.9847 79.7794 77.9847Z" fill="white"/>
</svg>
`;

const LogoSVG = color => {
  return svg.replace(/white/g, color);
};

export default LogoSVG;