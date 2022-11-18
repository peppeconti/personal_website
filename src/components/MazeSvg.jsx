import { useLayoutEffect, useRef } from 'react';
import './MazeSvg.css';
import { gsap } from "gsap";

// Force CSSPlugin to not get dropped during build


const MazeSvg = () => {

    const svg = useRef();
    const tl = useRef();
    const path = useRef();

    useLayoutEffect(() => {
        path.current.style.strokeDashoffset = path.current.getTotalLength();
        path.current.style.strokeDasharray = path.current.getTotalLength();
        path.current.style.fill = 'none';

        const ctx = gsap.context(() => {
            tl.current = gsap.timeline()
                .to('.maze', { duration: 100, strokeDashoffset: 0 })
                .to('.maze', { fill: 'red'});
        }, svg);

        return () => ctx.revert();

    }, []);

    return (
        <svg ref={svg} width="460" height="456" viewBox="0 0 460 456" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='maze' ref={path} d="M208.932 455.746C161.339 452.675 116.517 434.784 79.9031 404.244C59.083 386.877 41.475 365.675 28.0863 341.849C12.5837 314.261 3.06783 282.994 0.350021 250.714C-0.375985 242.091 -0.0803843 240.296 2.2659 239.08C3.2906 238.549 6.71518 238.431 30.0748 238.123C53.9271 237.809 56.833 237.833 57.8419 238.356C59.7107 239.324 60.122 240.398 60.8736 246.267C65.6637 283.673 81.4858 316.969 107.303 343.973C117.942 355.101 132.128 366.222 145.439 373.87C160.02 382.247 176.512 388.64 193.177 392.374C198.944 393.666 209.327 395.367 211.453 395.369H212.854V374.614V353.858L211.64 353.659C210.972 353.549 209.334 353.284 207.998 353.069C186.89 349.672 164.524 340.02 147.898 327.133C122.773 307.659 105.918 281.809 98.3504 251.144C96.6866 244.402 96.4027 241.705 97.1948 240.171C98.3152 237.999 98.9058 237.91 113.879 237.656C138.174 237.243 144.963 237.275 146.087 237.807C147.702 238.572 148.202 239.731 149.031 244.631C151.623 259.947 158.529 273.894 168.969 284.894C177.518 293.903 187.203 300.374 198.474 304.607C201.943 305.91 210.019 308.164 211.217 308.164C211.661 308.164 211.727 305.897 211.644 293.543L211.546 278.921L208.047 277.475C196.668 272.771 186.404 262.909 181.148 251.629C177.902 244.662 176.645 239.239 176.368 231.005C176.114 223.463 176.696 219.235 178.91 212.542C181.472 204.796 185.504 198.207 191.181 192.488C196.417 187.214 202.183 183.304 208.559 180.704L211.546 179.486V163.825V148.164L210.613 148.293C208.111 148.639 199.029 152.013 194.366 154.329C181.185 160.876 170.441 170.331 162.247 182.597C156.956 190.515 152.359 201.419 150.492 210.48C149.461 215.48 149.131 216.314 147.809 217.257C146.743 218.018 146.451 218.026 123.115 217.903C100.65 217.784 99.4484 217.743 98.4532 217.067C97.1924 216.211 96.324 214.637 96.3266 213.212C96.3292 211.699 99.0064 201.691 100.812 196.445C110.001 169.742 126.422 146.469 148.613 128.695C153.176 125.041 163.677 118.036 169.048 115.063C180.459 108.748 195.341 103.113 207.625 100.458C209.576 100.036 211.551 99.6044 212.013 99.4989L212.854 99.307V80.7708V62.2345L211.64 62.4395C210.972 62.5523 209.25 62.8167 207.812 63.0271C200.487 64.0991 188.91 66.8447 180.754 69.4438C170.426 72.735 155.309 79.5908 145.625 85.3755C123.562 98.5552 104.584 116.488 90.2596 137.692C75.2272 159.943 66.33 183.055 61.831 211.538C61.478 213.773 61.0334 215.302 60.5954 215.787C58.9099 217.653 59.8707 217.607 30.6141 217.219C0.605219 216.822 1.72436 216.922 0.481531 214.514C-0.274638 213.048 -0.0945428 209.995 1.30216 200.601C11.3344 133.122 49.2429 74.0912 106.409 36.9282C137.748 16.5551 172.896 4.26656 211.087 0.33001C217.08 -0.287695 218.207 -0.125725 219.714 1.56972C220.591 2.55644 220.886 5.27175 220.246 6.46601C219.226 8.36762 218.115 8.78705 212.624 9.34323C157.276 14.9498 107.688 39.1902 70.0355 79.0469C40.0694 110.767 20.0939 149.676 11.9744 192.14C10.7404 198.594 9.45899 207.394 9.71572 207.651C9.80719 207.743 19.611 207.869 31.5019 207.932L53.1218 208.047L54.1526 202.387C57.153 185.91 63.0574 168.183 70.486 153.348C86.1018 122.162 110.119 96.2035 140.21 77.9869C161.964 64.8177 187.029 56.241 212.929 53.1047C217.611 52.5377 218.152 52.5355 219.295 53.0787C221.935 54.3341 221.817 53.0628 221.817 80.4222V105.01L220.604 106.227C219.551 107.282 218.919 107.528 215.842 108.082C180.702 114.406 149.349 134.121 128.215 163.182C121.611 172.262 115.169 184.177 111.141 194.76C109.103 200.116 106.57 208.146 106.836 208.413C106.911 208.488 114.728 208.672 124.207 208.822L141.441 209.094L141.892 206.916C142.518 203.894 144.706 197.069 146.268 193.263C153.609 175.375 167.292 159.467 183.785 149.643C188.969 146.555 191.198 145.448 196.481 143.336C204.166 140.263 214.647 137.563 217.099 138.024C217.773 138.151 218.817 138.769 219.418 139.397L220.51 140.54L220.612 162.342L220.714 184.144L219.854 185.429C219.133 186.506 218.436 186.905 215.541 187.899C208.492 190.319 203.748 193.125 198.881 197.752C185.218 210.743 181.418 230.53 189.335 247.46C194.49 258.483 204.022 266.812 215.894 270.665C218.477 271.503 219.144 271.888 219.849 272.945L220.697 274.216L220.695 294.465C220.694 313.855 220.663 314.765 219.968 315.907C218.869 317.714 217.991 318.02 214.562 317.793C204.86 317.149 190.08 311.989 180.001 305.726C168.807 298.77 158.604 288.566 151.673 277.397C146.713 269.402 142.696 259.239 140.564 249.287L139.938 246.364L123.453 246.624C114.387 246.767 106.916 246.928 106.852 246.983C106.624 247.175 108.704 254.892 110.178 259.322C114.757 273.082 122.312 286.903 131.659 298.621C135.877 303.907 145.398 313.448 150.667 317.667C169.164 332.476 190.383 341.532 213.974 344.686C219.19 345.384 220.427 345.854 221.251 347.451C222.105 349.106 222.105 401.212 221.251 402.867C220.048 405.199 218.369 405.456 210.426 404.525C169.088 399.678 131.966 381.755 103.035 352.675C89.093 338.662 78.1815 323.435 69.3959 305.732C61.1996 289.216 55.89 272.737 52.9055 254.551L51.6925 247.159L41.2022 247.159C35.4325 247.159 25.8773 247.27 19.9685 247.407L9.22506 247.655L9.47048 250.494C14.7877 312.014 45.4819 367.286 95.0174 404.542C110.787 416.403 128.925 426.33 147.64 433.343C168.38 441.115 188.653 445.361 211.271 446.669C216.139 446.951 218.988 447.275 219.663 447.625C222.515 449.103 222.469 453.941 219.589 455.434C218.529 455.983 214.451 456.102 208.932 455.746H208.932ZM219.517 452.427C220.05 451.255 219.476 449.884 218.211 449.306C217.71 449.077 215.997 448.89 214.405 448.89C210.76 448.89 202.871 448.289 196.794 447.548C158.149 442.837 121.67 427.916 91.2826 404.389C80.5227 396.058 66.7797 383.056 58.8489 373.703C39.725 351.15 25.9992 326.66 17.154 299.311C12.0623 283.568 8.35029 264.725 7.23048 248.936L6.97167 245.287L15.513 245.287C20.2107 245.286 30.711 245.175 38.8469 245.039L53.6395 244.793L54.097 248.502C55.3554 258.704 58.1719 270.895 61.785 281.779C80.9915 339.634 128.997 383.98 187.964 398.338C196.891 400.512 206.684 402.163 213.841 402.7C217.94 403.008 218.936 402.803 219.512 401.537C220.124 400.192 220.139 350.159 219.528 348.816C218.979 347.608 217.926 347.247 213.477 346.743C207.993 346.122 200.702 344.613 194.326 342.779C150.182 330.083 115.859 294.119 105.089 249.275C104.553 247.043 104.191 245.14 104.284 245.046C104.462 244.867 112.559 244.663 130.931 244.372L141.82 244.199L142.246 246.708C144.675 261.001 151.657 275.653 161.524 287.158C173.73 301.39 190.888 311.355 209.26 314.882C215.865 316.15 216.79 316.197 217.678 315.306C218.447 314.536 218.456 314.29 218.456 294.666C218.456 281.831 218.321 274.552 218.074 274.089C217.85 273.671 216.822 273.12 215.602 272.764C202.016 268.807 190.592 258.014 185.825 244.633C180.691 230.222 183.078 214.148 192.148 202.059C197.824 194.491 205.675 188.877 214.652 185.965C216.512 185.361 217.859 184.699 218.085 184.277C218.318 183.84 218.456 175.744 218.456 162.469C218.456 141.891 218.437 141.339 217.715 140.684C217.104 140.129 216.603 140.056 214.842 140.263C209.045 140.946 198.89 144.286 191.378 147.98C173.542 156.752 159.286 171.094 150.643 188.959C147.472 195.515 146.016 199.473 144.313 206.176L143.077 211.041L123.529 210.906C112.778 210.832 103.954 210.748 103.921 210.719C103.722 210.547 107.379 198.671 108.837 194.76C110.861 189.328 116.356 177.815 119.167 173.118C134.95 146.744 157.569 126.824 185.029 115.113C194.325 111.148 202.525 108.634 213.373 106.423C216.418 105.802 218.809 105.117 219.162 104.763C219.7 104.224 219.774 101.663 219.865 80.4682L219.966 56.7759L219.147 55.7318C218.348 54.7146 218.259 54.6939 215.684 54.9317C200.708 56.3148 182.606 60.7845 167.475 66.8353C144.722 75.9335 124.058 89.5651 106.598 106.994C89.7735 123.787 76.5724 143.387 67.3707 165.234C62.1012 177.745 57.2154 195.03 55.4279 207.486C55.295 208.412 55.1026 209.466 55.0004 209.829C54.8245 210.452 53.5335 210.474 31.0309 210.245C17.9499 210.111 7.21426 209.978 7.17393 209.949C7.1336 209.92 7.42039 207.495 7.81125 204.559C15.2273 148.867 42.877 97.8817 85.4935 61.3153C118.541 32.9599 158.456 14.7887 201.276 8.60625C204.87 8.08722 209.828 7.47328 212.293 7.24195C217.514 6.75203 218.456 6.32423 218.456 4.4436C218.456 3.48069 218.22 2.99583 217.53 2.54305C216.709 2.0035 216.09 1.98348 212.021 2.36483C150.726 8.11064 93.9428 38.2964 54.2749 86.2218C26.3313 119.982 7.8487 162.836 2.78087 205.614C2.45166 208.393 2.12089 211.076 2.04582 211.577C1.83764 212.965 2.56218 214.162 3.84749 214.554C4.49291 214.751 16.6805 215.016 31.3571 215.153C56.4903 215.386 57.7459 215.366 58.5297 214.716C59.2101 214.153 59.4794 213.191 60.0944 209.132C63.9298 183.814 73.1345 159.809 87.2443 138.328C93.7002 128.499 99.719 121.051 108.447 112.088C127.249 92.7813 149.425 78.466 174.809 69.2485C186.065 65.1609 202.188 61.2988 212.574 60.2019L215.095 59.9356V80.5312V101.127L213.507 101.377C209.799 101.961 199.427 104.664 194.3 106.383C151.564 120.705 118.175 153.6 103.189 196.142C101.065 202.173 98.5656 211.367 98.5656 213.153C98.5656 215.713 97.6348 215.609 122.787 215.84C135.653 215.958 145.703 215.903 146.203 215.713C147.17 215.345 147.299 214.98 148.844 208.234C150.231 202.178 151.991 197.326 155.154 190.831C165.943 168.678 186.303 152.103 209.866 146.29C211.201 145.961 212.588 145.605 212.947 145.499C213.563 145.317 213.601 146.335 213.601 163.209V181.111L211.64 181.801C197.201 186.88 185.272 199.266 180.594 214.035C178.307 221.254 177.673 230.882 179.014 237.989C180.421 245.441 183.693 253.086 187.983 258.948C193.719 266.784 202.6 273.406 211.64 276.586L213.601 277.276V294.006V310.737L212.2 310.525C209.173 310.067 200.897 307.812 197.354 306.48C186.958 302.571 178.234 296.976 169.958 288.906C163.025 282.147 158.427 275.879 154.275 267.527C150.49 259.913 147.88 251.714 146.727 243.818C146.403 241.597 146.085 240.655 145.457 240.064L144.619 239.276L122.619 239.635C110.52 239.832 100.348 240.099 100.017 240.228C98.621 240.771 98.5239 242.083 99.527 246.844C107.9 286.585 134.498 320.9 170.833 338.841C179.858 343.297 188.111 346.331 197.914 348.798C202.217 349.881 204.902 350.385 213.881 351.797L215.095 351.988V375.002V398.015L213.134 397.789C212.055 397.665 209.324 397.313 207.065 397.008C157.868 390.36 113.88 362.738 86.4452 321.264C80.9581 312.969 79.0427 309.615 74.8879 301.025C71.0893 293.172 68.9602 287.978 66.4376 280.408C62.6666 269.093 59.9819 257.06 58.6116 245.33C58.1536 241.411 57.8436 240.587 56.6882 240.219C55.4271 239.818 4.77427 240.416 3.65416 240.846C3.1159 241.052 2.50961 241.588 2.30684 242.037C1.42085 244 3.57305 263.665 6.00088 275.79C15.9317 325.386 42.2196 369.75 81.0116 402.379C115.818 431.656 158.83 449.385 204.263 453.184C216.759 454.228 218.743 454.13 219.517 452.427V452.427ZM239.459 454.72C238.194 453.558 238.064 453.26 238.064 451.51C238.064 449.772 238.198 449.459 239.415 448.341C240.759 447.106 240.79 447.099 245.578 446.855C278.054 445.202 305.911 437.926 333.865 423.796C359.393 410.891 382.485 392.46 401.365 369.919C425.489 341.118 441.927 305.461 448.122 268.492C449.199 262.068 450.858 248 450.584 247.624C450.545 247.571 441.001 247.417 429.374 247.282L408.234 247.036L408.052 247.939C407.952 248.436 407.593 250.695 407.253 252.959C402.96 281.62 391.098 309.907 373.512 333.428C365.996 343.481 354.353 355.827 345.256 363.392C317.247 386.684 285.448 400.314 249.271 404.535C241.872 405.398 241.118 405.343 239.459 403.819L238.064 402.538V375.159V347.78L239.413 346.541C240.537 345.509 241.158 345.26 243.148 345.047C258.741 343.371 274.169 338.678 288.399 331.282C313.414 318.278 333.536 296.861 345.281 270.737C348.476 263.631 353.591 247.639 352.87 247.01C352.791 246.94 345.32 246.767 336.268 246.624L319.809 246.364L319.351 248.913C318.686 252.616 316.799 259.186 315.286 263.065C305.349 288.552 284.075 307.975 258.064 315.308C253.18 316.685 246.602 317.895 244.003 317.895C241.622 317.895 239.972 316.717 239.385 314.597C238.882 312.783 238.862 276.261 239.363 274.511C239.932 272.523 241.1 271.592 244.373 270.519C251.412 268.21 258.977 263.335 263.522 258.179C270.85 249.867 274.509 240.213 274.509 229.193C274.509 217.329 270.134 206.764 261.799 198.503C256.94 193.687 251.785 190.518 244.787 188.044C241.01 186.709 239.911 185.874 239.373 183.934C238.812 181.911 238.915 142.539 239.486 140.878C239.743 140.13 240.485 139.204 241.239 138.69C242.898 137.559 244.684 137.7 251.779 139.522C267.907 143.664 281.935 151.682 293.726 163.497C304.997 174.792 313.073 188.654 317.065 203.556C317.726 206.026 318.323 208.25 318.391 208.498C318.486 208.844 322.263 208.904 334.687 208.759C343.581 208.655 351.406 208.486 352.075 208.384C353.544 208.161 353.582 208.447 351.036 200.694C345.91 185.084 338.227 170.948 327.57 157.52C322.946 151.694 312.526 141.268 306.6 136.537C288.631 122.193 268.365 112.793 246.159 108.506C243.422 107.978 240.714 107.302 240.141 107.005C237.841 105.813 237.878 106.252 237.878 80.1769C237.879 53.5324 237.778 54.5361 240.587 53.1608C242.144 52.3982 243.665 52.5034 253.68 54.0665C287.717 59.3787 318.741 73.7641 345.142 96.4766C350.885 101.417 360.671 111.26 365.273 116.725C384.57 139.638 397.97 166.731 404.427 195.883C405.479 200.633 406.695 207.113 406.695 207.967C406.695 208.228 413.668 208.264 428.444 208.081C440.406 207.933 450.24 207.764 450.298 207.706C450.357 207.647 450.063 205.258 449.645 202.396C444.742 168.803 432.507 136.974 413.692 108.865C382.854 62.7941 336.176 29.5358 282.883 15.6635C271.599 12.7262 260.964 10.8119 248.64 9.49993C241.208 8.70883 240.487 8.42922 239.553 5.97922C238.995 4.51514 238.996 4.27652 239.565 2.85053C240.827 -0.309164 242.396 -0.523503 253.912 0.890449C317.577 8.70732 373.946 41.0544 413.048 92.2101C438.23 125.155 454.254 164.67 459.358 206.413C459.94 211.171 460.023 212.89 459.712 213.71C459.189 215.09 458.28 216.092 457.164 216.519C456.676 216.706 444.09 217.02 429.194 217.218C399.639 217.61 400.461 217.656 399.068 215.525C398.752 215.042 398.159 212.488 397.75 209.85C391.853 171.832 375.097 138.66 348.254 111.859C328.675 92.3121 305.176 77.9483 278.775 69.3901C269.498 66.383 262.071 64.6807 248.429 62.4344L247.215 62.2345V80.7708V99.307L248.055 99.4859C261.277 102.3 272.232 105.912 283.175 111.064C299.347 118.679 316.236 131.098 328.046 144.057C342.702 160.141 353.307 178.191 359.802 198.107C361.815 204.279 363.744 211.601 363.744 213.07C363.744 214.592 362.254 216.583 360.742 217.082C359.87 217.37 351.945 217.6 336.397 217.788C315.322 218.042 313.264 218.013 312.405 217.449C310.908 216.466 310.431 215.412 309.59 211.228C307.762 202.137 303.025 190.754 297.754 182.784C286.918 166.398 270.02 153.983 251.709 148.955L248.335 148.029V163.869V179.708L249.362 179.962C251.275 180.434 257.165 183.418 260.509 185.608C264.714 188.362 272.077 195.683 274.797 199.813C278.622 205.621 281.195 211.809 282.783 219.02C283.926 224.21 283.926 234.177 282.783 239.367C281.189 246.606 278.596 252.828 274.784 258.568C272.198 262.462 266.01 268.868 262.135 271.664C259.163 273.808 253.17 277.068 249.923 278.306L248.335 278.911V293.538C248.335 304.991 248.437 308.164 248.802 308.161C249.635 308.155 256.65 306.28 259.534 305.293C281.826 297.662 299.833 279.756 307.545 257.552C309.211 252.758 309.843 250.29 310.917 244.393C311.874 239.142 312.451 238.062 314.602 237.501C315.234 237.336 325.666 237.347 337.786 237.525C362.328 237.885 361.317 237.766 362.789 240.487L363.516 241.83L362.5 246.748C358.164 267.752 349.094 287.011 335.429 304.235C331.12 309.666 320.514 320.367 315.355 324.49C296.634 339.448 275.314 349.126 252.817 352.878C250.866 353.204 248.807 353.563 248.242 353.678L247.215 353.885V374.627V395.37H248.315C251.817 395.37 264.55 393.033 272.799 390.877C339.969 373.318 390.074 316.208 398.873 247.176C399.305 243.789 399.889 240.57 400.172 240.022C400.455 239.474 401.278 238.744 402.001 238.4C403.214 237.824 405.399 237.802 430.044 238.129C459.537 238.52 457.807 238.356 459.386 240.91C460.032 241.955 460.098 242.53 459.905 245.474C457.815 277.36 450.136 305.866 436.215 333.428C424.808 356.011 410.769 375.095 392.429 392.952C354.399 429.979 305.592 451.8 252.257 455.624C249.381 455.83 245.639 455.999 243.941 456C240.947 456 240.813 455.963 239.459 454.72V454.72ZM249.642 453.572C286.468 452.031 325.759 439.097 357.955 417.919C415.012 380.387 451.393 319.492 457.29 251.65C458.076 242.605 458.06 242.128 456.944 241.248C456.063 240.554 454.938 240.513 429.601 240.246L403.177 239.967L402.369 240.909C401.76 241.618 401.495 242.576 401.296 244.785C400.88 249.409 399.035 259.941 397.567 266.07C393.206 284.279 385.123 303.262 375.043 318.969C355.102 350.038 325.601 374.072 291.287 387.202C277.195 392.594 263.82 395.767 246.748 397.767L244.974 397.975V374.982V351.988L246.188 351.802C252.701 350.803 257.947 349.795 262.242 348.719C294.426 340.652 322.382 320.884 340.937 293.075C350.426 278.854 358.282 259.612 360.796 244.436C361.595 239.611 363.755 240.057 337.601 239.638C312.812 239.241 313.936 239.139 313.506 241.822C312.691 246.906 311.549 252.026 310.437 255.579C301.764 283.284 279.197 303.857 250.915 309.841C248.463 310.36 246.375 310.784 246.275 310.784C246.176 310.784 246.094 303.219 246.094 293.972V277.159L247.308 276.903C249.547 276.43 257.453 272.365 260.765 269.983C268.586 264.358 275.218 255.596 278.56 246.474C280.878 240.144 281.364 237.151 281.364 229.193C281.364 221.236 280.878 218.243 278.56 211.913C274.259 200.17 265.411 190.183 254.279 184.503C252.104 183.394 249.373 182.185 248.209 181.818L246.094 181.15V163.246V145.342L247.121 145.566C259.458 148.248 271.917 154.202 281.949 162.21C288.82 167.693 296.696 176.713 301.334 184.406C305.854 191.905 309.612 201.445 311.604 210.48C312.937 216.526 312.338 216.214 322.089 215.943C326.409 215.824 336.666 215.626 344.883 215.504C361.343 215.26 361.503 215.237 361.503 213.065C361.503 211.55 359.935 205.407 358.073 199.626C353.218 184.554 345.973 170.42 336.671 157.874C315.569 129.412 285.048 109.692 250.594 102.258L244.974 101.045V80.4909V59.9366L247.121 60.1932C255.351 61.1766 266.019 63.3853 274.666 65.896C311.108 76.4763 343.428 98.8608 366.43 129.45C383.898 152.681 395.22 179.741 399.786 209.17C400.492 213.719 400.936 214.917 402.017 215.189C402.474 215.304 414.872 215.26 429.569 215.091C460.988 214.73 458.11 215.221 457.685 210.293C457.274 205.526 455.741 195.608 454.309 188.449C450.451 169.168 444.135 150.607 435.676 133.165C412.428 85.2214 372.993 45.7327 323.923 23.0101C299.966 11.9162 273.552 4.74486 247.851 2.35683C243.088 1.91425 243.069 1.91565 242.155 2.77558C241.013 3.85078 240.986 5.01784 242.079 6.01583C242.776 6.65213 243.938 6.8887 248.896 7.40375C260.712 8.63143 269.242 10.131 281.127 13.0701C338.378 27.2272 388.134 63.5202 419.642 114.105C436.728 141.537 447.745 172.297 452.111 204.763C452.477 207.486 452.703 209.778 452.612 209.858C452.522 209.937 441.749 210.112 428.674 210.247L404.9 210.493L404.642 208.521C403.433 199.268 399.74 184.603 396.021 174.282C388.591 153.666 377.963 135.273 363.414 117.848C359.187 112.785 347.016 100.73 341.521 96.1635C314.614 73.8012 281.988 59.5808 247.883 55.3497C242.052 54.6263 241.761 54.6338 240.865 55.5316C240.134 56.2645 240.119 56.7791 240.119 80.2067C240.119 101.018 240.192 104.207 240.681 104.697C241.373 105.391 241.567 105.447 246.655 106.424C269.034 110.721 289.218 120.092 308.048 134.926C313.023 138.845 324.912 150.689 328.867 155.666C338.409 167.675 345.721 180.339 350.79 193.638C352.868 199.087 355.24 206.507 355.713 209.036L355.967 210.392L343.702 210.622C336.956 210.749 328.124 210.911 324.075 210.982L316.713 211.111L316.281 209.018C313.037 193.293 304.262 177.116 292.603 165.368C285.45 158.161 278.33 152.974 269.33 148.413C261.303 144.346 250.771 140.846 244.749 140.246C240.992 139.872 241.239 138.301 241.239 162.615C241.239 181.91 241.287 183.507 241.893 184.229C242.252 184.659 244.059 185.539 245.908 186.186C261.588 191.671 272.792 204.542 276.014 220.772C276.696 224.211 276.699 234.158 276.018 237.614C272.813 253.874 261.578 266.748 245.786 272.256C243.531 273.043 242.114 273.759 241.768 274.289C241.317 274.978 241.248 278.231 241.33 294.87L241.426 314.633L242.408 315.368C243.364 316.083 243.49 316.086 247.329 315.483C271.091 311.749 291.984 298.25 305.127 278.14C311.144 268.933 315.06 259.348 317.251 248.468L318.08 244.351L333.969 244.494C342.708 244.572 351.206 244.74 352.855 244.868L355.851 245.1L354.41 250.714C350.306 266.696 343.937 280.5 334.526 293.806C314.307 322.39 282.341 341.858 247.962 346.522C241.758 347.363 241.543 347.41 240.797 348.087C240.154 348.67 240.119 350.073 240.119 375.159C240.119 399.884 240.162 401.655 240.773 402.202C241.67 403.006 242.043 403.041 246.095 402.715C253.597 402.109 263.977 400.334 272.613 398.178C311.552 388.458 345.842 365.887 370.696 333.615C388.796 310.112 401.087 280.94 405.357 251.349C405.841 247.993 406.324 245.16 406.43 245.055C406.535 244.949 417.052 244.984 429.8 245.132L452.978 245.402L452.814 246.935C452.724 247.778 452.472 250.489 452.255 252.959C450.716 270.456 446.394 289.759 440.232 306.656C410.356 388.582 334.341 444.712 247.706 448.818C242.583 449.061 241.544 449.212 240.89 449.804C239.001 451.517 240.743 454.282 243.48 453.916C243.994 453.847 246.767 453.693 249.643 453.572H249.642ZM216.775 431.075C215.954 430.996 213.096 430.755 210.426 430.541C159.392 426.44 109.266 401.38 74.957 362.815C56.3783 341.932 42.2502 317.48 33.7577 291.509C30.7711 282.376 26.8555 266.306 26.8555 263.182C26.8555 259.69 30.7493 257.605 33.7948 259.466C35.2445 260.352 35.5668 261.187 36.7736 267.182C45.5996 311.026 69.7965 350.465 105.443 379.108C125.329 395.087 150.091 407.794 174.944 414.775C211.209 424.96 249.964 424.712 285.498 414.068C298.301 410.233 308.922 405.955 320.232 400.08C338.977 390.341 353.858 379.426 369 364.309C395.698 337.656 413.79 304.049 421.266 267.22C421.883 264.181 422.553 261.384 422.756 261.005C424.007 258.663 427.402 258.003 429.425 259.709C431.425 261.396 431.525 262.47 430.262 268.739C418.143 328.91 378.79 380.525 323.594 408.649C300.336 420.499 276.94 427.396 249.829 430.394C244.734 430.958 220.684 431.453 216.775 431.075V431.075ZM245.161 428.642C286.184 425.388 324.74 410.187 357.021 384.539C369.998 374.228 382.806 360.965 392.983 347.298C408.151 326.927 419.321 303.606 425.723 278.946C427.241 273.1 429.105 264.445 429.105 263.242C429.105 262.125 427.841 260.913 426.677 260.913C425.208 260.913 424.445 261.988 423.906 264.818C418.322 294.105 406.557 320.928 388.877 344.677C377.996 359.292 363.9 373.403 348.991 384.603C316.859 408.742 277.823 422.54 237.09 424.157C193.639 425.882 151.798 413.897 115.877 389.438C88.398 370.727 66.2454 345.44 51.3999 315.837C48.0213 309.1 47.2375 307.355 44.4252 300.305C40.406 290.23 36.6041 277.434 34.6947 267.556C34.257 265.292 33.7314 262.998 33.5266 262.458C33.0294 261.149 31.5734 260.482 30.4757 261.061C28.6923 262.001 28.6886 262.906 30.4344 271.047C42.8232 328.824 81.0296 378.523 134.234 406.07C142.505 410.353 147.722 412.71 155.71 415.774C183.828 426.559 214.962 431.038 245.161 428.642V428.642ZM178.493 371.84C148.261 361.808 121.852 342.851 103.08 317.708C87.1031 296.309 77.4986 271.897 74.2187 244.351C73.4595 237.975 73.5795 218.376 74.4181 211.79C77.8068 185.173 87.4537 161.064 103.108 140.088C108.15 133.332 111.758 129.238 118.603 122.503C134.254 107.104 151.737 95.9514 172.628 88.0398C179.952 85.2659 183.444 84.3339 184.949 84.7505C186.842 85.2743 187.907 86.6328 188.114 88.7874C188.276 90.4793 188.188 90.7361 187.033 91.9474C186.019 93.0103 184.943 93.5362 181.481 94.6605C152.257 104.15 126.478 123.042 108.566 148.097C94.4904 167.787 86.0318 190.213 83.2027 215.345C82.1772 224.456 82.633 239.836 84.2328 250.095C89.3615 282.986 106.202 313.054 131.993 335.369C145.968 347.461 164.179 357.602 182.784 363.653C185.992 364.697 186.632 365.044 187.359 366.138C188.92 368.489 188.204 371.546 185.829 372.676C184.03 373.531 183.357 373.454 178.493 371.84ZM185.686 369.869C186.34 368.988 186.363 368.768 185.906 367.812C185.454 366.868 184.731 366.515 179.796 364.834C172.481 362.342 167.102 360.101 160.62 356.847C145.126 349.069 133.267 340.373 120.958 327.765C100.962 307.282 87.862 281.956 82.7145 253.828C79.9479 238.71 79.8763 220.492 82.5224 204.944C91.2823 153.471 129.401 109.596 179.8 92.9754C185.046 91.2452 186.056 90.6029 186.056 88.9943C186.056 87.943 184.849 86.5961 183.907 86.5961C183.06 86.5961 174.34 89.5949 169.529 91.5405C138.914 103.921 112.744 126.332 96.1092 154.416C85.1649 172.892 78.4841 193.194 76.3069 214.594C75.5335 222.194 75.5425 236.18 76.3255 243.494C78.4686 263.515 84.4027 282.462 93.8955 299.595C96.7634 304.771 103.812 315.348 107.338 319.767C112.048 325.668 118.49 332.589 123.511 337.14C139.634 351.754 156.288 361.672 177.372 369.217C183.087 371.263 184.566 371.378 185.686 369.869V369.869ZM274.293 372.931C272.023 371.99 270.881 368.821 272.017 366.618C272.765 365.169 273.46 364.809 279.335 362.819C314.803 350.81 344.435 325.532 361.192 292.99C368.554 278.694 372.702 266.031 375.482 249.374C376.721 241.947 377.209 225.445 376.438 217.029C374.932 200.592 371.015 185.787 364.257 170.994C347.857 135.092 316.022 106.84 278.172 94.5961C273.158 92.9744 271.873 91.9915 271.609 89.5781C271.372 87.4113 272.573 85.4933 274.583 84.8293C275.794 84.429 276.371 84.4901 279.238 85.3218C291.159 88.7806 307.602 96.6903 319.485 104.681C332.505 113.437 345.681 125.888 355.399 138.62C383.026 174.813 392.549 220.619 381.618 264.732C375.177 290.72 361.7 314.61 342.642 333.82C325.382 351.217 305.03 363.816 281.22 371.845C276.904 373.3 275.657 373.496 274.293 372.931V372.931ZM282.015 369.314C320.323 356.013 350.839 329.446 368.605 293.931C374.906 281.335 379.525 267.191 381.861 253.334C383.468 243.805 383.724 240.359 383.706 228.445C383.688 216.091 383.17 210.474 381.11 200.285C373.317 161.746 350.464 127.94 317.299 105.89C311.303 101.904 304.139 97.8198 298.383 95.1055C291.345 91.787 277.492 86.5961 275.674 86.5961C274.84 86.5961 273.733 88.086 273.733 89.2073C273.733 90.666 274.471 91.1225 279.536 92.7969C317.507 105.35 349.337 133.572 365.83 169.31C375.246 189.713 379.55 210.536 378.944 232.749C378.078 264.438 367.065 293.837 346.628 319.018C342.41 324.216 331.74 334.88 326.496 339.139C312.584 350.438 296.363 359.367 279.401 365.063C277.02 365.862 274.771 366.775 274.403 367.091C272.926 368.358 274.013 371.042 276.003 371.042C276.572 371.042 279.277 370.264 282.015 369.314V369.314ZM220.51 337.328C201.589 335.538 183.981 329.334 168.409 318.969C149.517 306.395 134.685 288.15 126.431 267.333C124.576 262.655 124.405 261.56 125.268 259.888C126.09 258.294 127.257 257.638 129.269 257.638C131.856 257.638 132.909 258.776 134.814 263.626C142.273 282.627 156.271 299.937 173.371 311.306C186.753 320.204 201.827 325.796 217.958 327.846C223.697 328.575 235.586 328.666 241.239 328.024C274.717 324.221 303.797 304.831 320.135 275.416C322.371 271.391 325.03 265.627 326.401 261.836C327.506 258.779 328.81 257.638 331.196 257.638C333.183 257.638 334.355 258.3 335.174 259.888C336.045 261.575 335.856 262.87 334.102 267.238C323.79 292.932 304.856 313.515 280.125 325.918C268.979 331.508 257.531 335.014 244.6 336.798C239.413 337.514 225.67 337.816 220.51 337.328V337.328ZM246.468 334.408C283.986 328.559 315.368 304.512 330.63 269.917C333.906 262.491 334.159 260.948 332.277 259.896C330.443 258.871 329.544 259.79 327.533 264.749C317.589 289.271 300.061 308.188 276.559 319.764C265.466 325.227 256.089 328.098 243.293 329.948C238.039 330.707 221.211 330.588 215.842 329.754C196.368 326.728 178.953 319.147 164.3 307.318C150.777 296.401 139.637 281.329 133.113 265.123C130.896 259.617 129.547 258.405 127.698 260.258C126.61 261.348 126.76 262.455 128.607 266.976C138.986 292.368 157.621 312.331 182.228 324.418C193.392 329.902 204.922 333.312 217.709 334.911C224.156 335.718 239.825 335.444 246.468 334.408V334.408ZM195.335 294.305C164.15 277.717 149.282 241.047 160.064 207.314C165.914 189.011 179.552 172.902 196.318 164.489C199.733 162.776 200.397 162.672 202.263 163.559C203.807 164.293 204.637 165.757 204.637 167.744C204.637 169.834 203.704 170.8 199.314 173.251C182.161 182.832 170.992 197.963 166.86 217.217C166.129 220.627 166.016 222.259 166.008 229.568C165.998 239.259 166.351 241.644 168.987 249.694C174.205 265.629 184.938 278.313 200.212 286.597C201.99 287.561 203.713 288.76 204.041 289.261C204.37 289.765 204.637 290.95 204.637 291.908C204.637 293.382 204.446 293.834 203.367 294.915C201.472 296.814 199.815 296.688 195.335 294.305ZM202.116 293.12C203.614 291.384 202.901 290.429 198.199 287.873C178.925 277.394 166.453 258.641 163.9 236.304C162.399 223.17 165.719 207.947 172.661 196.127C178.876 185.544 188.466 176.358 198.726 171.157C202.67 169.158 203.591 167.715 202.008 166.012C200.875 164.793 199.769 164.994 195.954 167.11C188.969 170.985 183.398 175.23 178.487 180.419C162.123 197.71 155.507 220.874 160.228 244.351C164.308 264.641 178.349 283.135 196.98 292.76C200.138 294.391 200.969 294.449 202.116 293.12V293.12ZM256.521 295.146C255.637 294.355 255.312 293.696 255.167 292.401C254.882 289.874 255.707 288.577 258.498 287.166C284.852 273.834 298.596 245.081 292.575 215.871C291.655 211.408 289.17 204.643 286.746 200.001C280.729 188.477 271.666 179.322 260.01 172.994C256 170.817 255.058 169.815 255.058 167.727C255.058 165.12 257.108 162.947 259.568 162.947C261.273 162.947 269.24 167.475 274.285 171.31C287.389 181.273 296.861 195.623 300.876 211.595C305.315 229.256 303.382 246.515 295.132 262.878C288.269 276.489 276.945 288 264.015 294.507C259.939 296.558 258.258 296.702 256.521 295.146V295.146ZM265.093 291.45C270.042 288.635 272.295 287.033 276.92 283.039C287.617 273.804 295.579 260.576 299.081 246.223C300.58 240.077 300.811 237.775 300.791 229.193C300.774 221.481 300.686 220.363 299.746 215.907C295.339 195.015 283.248 178.306 264.871 167.71C260.01 164.907 258.823 164.683 257.598 166.336C256.45 167.884 257.157 169.021 260.31 170.698C280.357 181.361 293.152 200.09 295.808 222.659C296.396 227.651 296.016 237.244 295.039 242.084C292.278 255.763 285.709 267.865 275.922 277.304C270.942 282.106 266.84 285.098 260.776 288.35C258.996 289.304 257.556 290.346 257.33 290.842C256.535 292.59 258.229 294.56 260.1 294.064C260.511 293.955 262.758 292.779 265.093 291.45V291.45ZM127.511 198.146C127.1 197.976 126.344 197.383 125.83 196.83C123.914 194.763 124.931 190.953 130.282 180.164C139.279 162.02 153.481 146.304 170.728 135.405C175.999 132.074 186.294 127.034 192.015 124.983C200.475 121.951 210.049 119.752 219.016 118.783C224.376 118.204 237.221 118.293 242.733 118.948C277.128 123.037 306.873 141.822 325.143 170.994C329.801 178.432 335.732 191.343 335.732 194.045C335.732 196.61 333.185 198.794 330.671 198.385C328.36 198.01 327.707 197.229 325.83 192.595C320.282 178.901 311.87 166.244 301.884 156.566C285.974 141.145 266.394 131.568 244.04 128.272C238.409 127.442 223.076 127.332 217.709 128.084C190.179 131.941 166.735 145.099 150.031 166.067C143.236 174.597 139.006 182.021 134.032 194.141C133.131 196.337 132.534 197.257 131.663 197.789C130.448 198.531 128.786 198.674 127.511 198.146V198.146ZM130.928 195.546C131.262 195.154 132.111 193.343 132.813 191.522C134.644 186.773 138.207 179.691 141.173 174.902C151.415 158.371 165.867 145.178 183.3 136.445C219.98 118.071 263.183 122.562 295.58 148.117C300.499 151.998 309.411 161.036 313.078 165.863C319.068 173.748 323.986 182.308 327.361 190.724C328.289 193.038 329.318 195.23 329.647 195.595C330.965 197.054 333.491 195.961 333.491 193.931C333.491 192.537 330.713 185.738 327.874 180.186C305.323 136.082 255.92 112.51 207.505 122.754C198.051 124.754 189.47 127.834 180.261 132.532C162.239 141.727 146.972 155.954 136.376 173.427C132.321 180.113 126.951 191.814 126.951 193.962C126.951 196.004 129.626 197.069 130.928 195.546ZM29.6567 196.855C26.8845 195.629 26.4641 193.867 27.5872 188.183C31.2606 169.591 37.697 151.447 46.5631 134.69C50.4732 127.3 51.6501 125.308 56.1827 118.409C69.267 98.4944 84.6493 82.1458 103.981 67.608C158.683 26.4721 231.336 15.0568 296.702 37.3279C320.972 45.5968 343.356 58.2218 363.37 74.9296C368.989 79.6199 383.143 93.8093 387.889 99.5084C409.371 125.31 423.611 154.787 430.24 187.176C431.231 192.02 431.342 193.076 430.976 194.188C430.189 196.576 427.64 197.819 425.191 197.008C423.201 196.351 422.531 195.035 421.458 189.683C411.369 139.361 380.952 95.1167 337.039 66.8862C310.597 49.8868 281.435 39.7243 249.082 36.2343C241.428 35.4086 224.557 35.1158 216.37 35.6666C172.452 38.6216 132.3 54.889 99.1259 83.1678C93.8615 87.6553 81.8566 99.7946 77.4142 105.122C56.691 129.976 43.2914 157.552 36.7824 188.74C35.4403 195.17 35.0624 195.969 32.9367 196.871C31.4735 197.491 31.09 197.489 29.6567 196.855V196.855ZM32.7768 194.48C33.3721 193.977 33.8569 192.39 34.8652 187.644C41.5125 156.358 54.9267 128.785 75.5575 104C80.078 98.5688 92.8546 85.6579 98.0054 81.3157C119.17 63.4737 140.69 51.4388 166.426 43.0524C197.175 33.0325 230.172 30.5842 262.528 35.9218C295.574 41.373 327.51 55.4474 353.66 76.0838C359.864 80.98 364.877 85.4717 371.233 91.8284C397.582 118.182 415.253 150.668 423.08 187.147C423.891 190.929 424.741 193.971 425.107 194.398C425.916 195.346 427.406 195.34 428.358 194.385C429.301 193.44 429.295 193.178 428.2 187.794C421.693 155.786 407.429 126.313 386.017 100.631C381.496 95.2083 368.784 82.3708 363.37 77.7611C330.557 49.8197 291.704 33.4325 247.962 29.0843C239.957 28.2887 219.303 28.175 211.92 28.886C183.019 31.6693 158.156 38.8096 134.234 51.1963C91.5999 73.2722 59.2024 108.12 40.9531 151.532C35.7033 164.02 29.9822 183.559 29.2159 191.617C29.0164 193.716 29.07 193.951 29.8777 194.518C31.0044 195.309 31.8082 195.298 32.7768 194.48V194.48Z" fill="white" stroke="#000" strokeWidth="1" />
        </svg>
    );
}

export default MazeSvg;