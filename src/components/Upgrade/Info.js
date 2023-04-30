import React from 'react'
import ButtonAbb from './ButtonAbb'

function Info() {
   return (
      <section class="info bg-[#e0ff6e] flex flex-row justify-center gap-10 p-10">
         <div>
            <h1 class="text-5xl font-extrabold whitespace-pre-line">
               <br/>
               Eccelli nei tuoi studi <br/>
               Passa a Premium
            </h1>
            <ul class="mt-8">
               <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                  </svg>
                  <span>Apprendi da oltre 4 milioni di documenti Premium</span>
               </li>
               <li class="flex items-baseline gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                     <path class="fa-secondary" fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                  </svg>
                  <span>Ricevi aiuto circostanziato da un esperto</span>
               </li>
               <li class="flex items-baseline gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                     <g class="fa-duotone-group"><path class="fa-secondary" fill="currentColor" d="M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H352V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM576 448V192H448V448H576z"></path><path class="fa-primary" fill="currentColor" d="M448 192H576V448H448V192zm-16-64c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H432z"></path></g>
                  </svg>
                  <span>Studia online e offline su qualsiasi dispositivo</span>
               </li>
            </ul>
            <ButtonAbb />
         </div>
         <svg class="w-80 h-80" viewBox="0 0 527 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M154.926 150.159C-31.9277 189.491 25.771 449.988 220.087 390.634C333.979 355.79 328.494 230.359 368.26 209.727C388.735 199.129 444.394 236.137 478.22 219.707C577.726 171.38 507.311 40.0672 413.797 83.0129C369.443 103.385 364.37 166.035 341.233 176.461C318.096 186.888 248.864 130.411 154.926 150.159Z" fill="#CFF250"></path><path d="M304.05 6.94044C321.643 10.3799 339.085 28.0052 342.309 46.0558C348.567 81.2736 303.498 69.0523 300.067 68.2712C279.652 63.6369 265.484 46.5369 267.944 30.2538C270.404 13.9706 286.417 3.51576 304.05 6.94044Z" fill="#CFF250"></path><path d="M142.972 71.9026C208.721 44.9798 317.952 72.7011 327.861 121.813C337.771 170.924 227.384 301.316 165.544 310.935C103.705 320.554 20.4046 253.779 10.3428 202.724C0.280937 151.67 77.1979 98.8643 142.972 71.9026Z" fill="#416467"></path><path d="M189.159 283.877L147.129 290.533C145.171 290.82 143.175 290.715 141.257 290.226C139.339 289.736 137.537 288.871 135.955 287.681C134.373 286.49 133.042 284.998 132.04 283.289C131.037 281.581 130.383 279.691 130.114 277.728L118.612 201.838C117.35 193.51 122.918 185.688 131.044 184.404L173.074 177.749C175.029 177.459 177.023 177.561 178.939 178.048C180.855 178.535 182.656 179.396 184.237 180.584C185.819 181.771 187.15 183.261 188.153 184.966C189.156 186.671 189.811 188.558 190.081 190.518L201.584 266.409C202.852 274.779 197.285 282.586 189.159 283.877Z" fill="white"></path><path d="M167.097 256.949L155.269 258.823C154.896 258.887 154.553 259.069 154.29 259.341C154.027 259.613 153.858 259.961 153.806 260.336L153.258 264.16C153.206 264.535 153.036 264.884 152.773 265.156C152.51 265.428 152.168 265.609 151.795 265.673L143.524 266.978C143.245 267.018 142.96 266.991 142.694 266.899C142.427 266.807 142.187 266.653 141.992 266.45C141.796 266.246 141.653 265.999 141.572 265.729C141.491 265.459 141.475 265.173 141.527 264.896L148.294 224.338C148.36 223.975 148.537 223.642 148.8 223.385C149.063 223.128 149.4 222.958 149.764 222.901L162.368 220.902C162.734 220.846 163.108 220.908 163.435 221.079C163.763 221.25 164.028 221.521 164.192 221.853L182.6 258.428C182.729 258.679 182.798 258.956 182.8 259.239C182.802 259.521 182.738 259.8 182.612 260.053C182.487 260.305 182.303 260.525 182.077 260.694C181.851 260.862 181.588 260.975 181.31 261.023L172.408 262.411C172.036 262.467 171.655 262.4 171.324 262.221C170.993 262.043 170.728 261.761 170.571 261.419L168.914 257.949C168.757 257.61 168.496 257.33 168.169 257.15C167.842 256.971 167.467 256.9 167.097 256.949ZM156.697 239.599L155.726 246.407C155.684 246.682 155.706 246.963 155.791 247.227C155.876 247.492 156.022 247.733 156.216 247.931C156.411 248.129 156.649 248.279 156.912 248.369C157.175 248.459 157.455 248.486 157.73 248.448L161.613 247.83C161.887 247.783 162.146 247.672 162.37 247.507C162.594 247.342 162.777 247.128 162.904 246.88C163.031 246.632 163.099 246.359 163.102 246.08C163.105 245.802 163.044 245.527 162.923 245.276L160.004 239.086C159.849 238.742 159.586 238.459 159.256 238.278C158.926 238.097 158.546 238.028 158.174 238.081C157.801 238.134 157.456 238.307 157.19 238.573C156.923 238.839 156.751 239.185 156.697 239.557V239.599Z" fill="#F064FC"></path><path d="M180.43 204.163L181.123 208.82C181.155 209.001 181.15 209.187 181.109 209.367C181.068 209.547 180.992 209.716 180.885 209.866C180.778 210.016 180.642 210.143 180.485 210.24C180.328 210.337 180.154 210.401 179.972 210.43L177.358 210.846C177.177 210.876 177.003 210.941 176.847 211.038C176.691 211.135 176.556 211.262 176.45 211.412C176.343 211.562 176.268 211.731 176.227 211.91C176.187 212.09 176.182 212.275 176.214 212.456L176.672 215.496C176.704 215.677 176.699 215.863 176.659 216.042C176.618 216.221 176.542 216.391 176.436 216.541C176.33 216.69 176.194 216.817 176.039 216.915C175.883 217.012 175.709 217.077 175.528 217.106L170.903 217.842C170.722 217.868 170.538 217.859 170.361 217.814C170.184 217.769 170.017 217.689 169.871 217.579C169.725 217.47 169.602 217.332 169.509 217.175C169.416 217.017 169.355 216.843 169.329 216.662L168.872 213.622C168.846 213.441 168.785 213.267 168.692 213.109C168.599 212.952 168.476 212.814 168.33 212.705C168.184 212.595 168.017 212.516 167.84 212.471C167.663 212.426 167.479 212.416 167.298 212.442L164.594 212.866C164.23 212.917 163.86 212.822 163.566 212.601C163.272 212.379 163.078 212.05 163.027 211.686L162.334 207.029C162.302 206.848 162.307 206.662 162.348 206.482C162.388 206.302 162.465 206.132 162.572 205.983C162.679 205.833 162.815 205.706 162.972 205.609C163.128 205.512 163.303 205.448 163.485 205.419L166.182 204.989C166.364 204.96 166.538 204.896 166.695 204.799C166.851 204.702 166.987 204.575 167.094 204.425C167.201 204.275 167.278 204.106 167.319 203.926C167.359 203.746 167.364 203.56 167.332 203.379L166.847 200.207C166.816 200.025 166.82 199.839 166.861 199.66C166.902 199.48 166.978 199.31 167.085 199.16C167.193 199.011 167.328 198.883 167.485 198.787C167.642 198.69 167.816 198.625 167.998 198.597L172.643 197.917C172.824 197.89 173.009 197.9 173.186 197.945C173.363 197.99 173.529 198.069 173.675 198.179C173.822 198.289 173.945 198.426 174.038 198.584C174.131 198.741 174.192 198.915 174.217 199.097L174.696 202.275C174.721 202.456 174.782 202.631 174.875 202.788C174.968 202.945 175.091 203.083 175.238 203.193C175.384 203.302 175.55 203.382 175.727 203.427C175.905 203.472 176.089 203.481 176.27 203.455L178.884 203.039C179.236 202.992 179.593 203.082 179.881 203.292C180.169 203.501 180.365 203.813 180.43 204.163Z" fill="#F064FC"></path><path d="M255.92 200.693C239.662 199.194 223.403 197.646 207.137 196.258C198.949 195.564 192.383 188.485 194.414 180.087C201.639 154.11 210.216 130.465 211.103 103.17C211.235 94.1476 215.339 83.6403 225.663 83.2586C240.965 83.3765 256.267 83.0712 271.576 83.1267C280.589 83.4112 286.011 91.7394 284.971 100.22C281.775 128.807 277.566 157.247 274.058 185.792C273.573 190.153 271.405 194.151 268.017 196.935C264.629 199.719 260.288 201.067 255.92 200.693Z" fill="white"></path><path d="M273.649 118.237C271.881 120.881 267.797 122.047 265.62 120.402C263.443 118.757 263.402 113.781 265.177 111.103C266.951 108.424 271.174 107.785 273.33 109.472C275.486 111.158 275.417 115.6 273.649 118.237Z" fill="#F064FC"></path><path d="M259.623 111.942C260.316 112.74 253.452 114.024 244.3 114.663C242.22 114.816 240.064 114.968 237.956 115.107C228.839 115.704 220.671 115.399 219.52 114.732C218.369 114.066 224.845 113.247 234.351 112.553C236.532 112.396 238.721 112.225 240.916 112.04C250.464 111.248 258.943 111.117 259.637 111.928" fill="#F36A1C"></path><path d="M226.031 122.311C225.753 121.582 229.574 120.715 234.524 120.479L237.991 120.319C242.948 120.111 247.427 120.541 247.968 121.138C248.509 121.735 244.758 122.359 239.571 122.665L235.994 122.887C230.801 123.234 226.329 123.04 226.058 122.311" fill="#F36A1C"></path><path d="M258.354 120.236C258.132 120.93 256.579 121.686 254.984 121.762L253.882 121.797C252.301 121.839 251.109 121.284 251.227 120.694C251.344 120.104 252.703 119.618 254.395 119.486L255.567 119.382C257.279 119.208 258.576 119.521 258.34 120.236" fill="#F36A1C"></path><path d="M269.538 146.879C267.645 149.412 263.353 150.349 261.148 148.649C258.943 146.948 259.11 142.146 261.058 139.627C263.006 137.107 267.298 136.538 269.468 138.239C271.638 139.939 271.43 144.346 269.538 146.879Z" fill="#F064FC"></path><path d="M255.338 140.251C256.031 141.042 248.89 142.007 239.551 142.333L233.082 142.548C223.812 142.84 215.748 142.451 214.681 141.854C213.613 141.257 220.11 140.619 229.685 140.168C231.882 140.071 234.101 139.96 236.327 139.842C246.033 139.342 254.638 139.453 255.338 140.244" fill="#F36A1C"></path><path d="M220.325 148.642C220.117 147.982 224.055 147.323 229.109 147.295H232.624C237.7 147.295 242.276 147.906 242.802 148.496C243.329 149.086 239.412 149.488 234.073 149.537C232.848 149.537 231.621 149.551 230.392 149.578C225.053 149.669 220.539 149.322 220.325 148.655" fill="#F36A1C"></path><path d="M253.619 148.142C253.362 148.836 251.719 149.447 250.069 149.44H248.925C247.288 149.398 246.11 148.815 246.234 148.26C246.359 147.705 247.815 147.309 249.562 147.261L250.783 147.219C252.558 147.129 253.882 147.49 253.619 148.163" fill="#F36A1C"></path><path d="M265.156 174.841C263.207 177.214 258.701 177.867 256.329 176.041C253.958 174.216 254.062 169.49 256.101 167.13C258.139 164.771 262.694 164.507 264.969 166.325C267.243 168.143 267.104 172.467 265.156 174.841Z" fill="#F064FC"></path><path d="M250.076 167.38C250.81 168.199 243.274 168.643 233.435 168.289L226.661 168.046C216.955 167.679 208.635 166.79 207.546 166.166C206.458 165.541 213.148 165.291 223.125 165.472C225.42 165.52 227.743 165.576 230.059 165.61C236.68 165.721 243.586 165.708 250.034 167.345" fill="#F36A1C"></path><path d="M213.453 173.161C213.218 172.467 217.301 172.106 222.585 172.467L226.266 172.703C231.584 173.078 236.41 174.008 236.978 174.633C237.547 175.257 233.442 175.375 227.84 175.035C226.55 174.952 225.268 174.876 223.985 174.813C218.397 174.522 213.689 173.862 213.453 173.189" fill="#F36A1C"></path><path d="M248.377 175.014C248.12 175.66 246.401 176.173 244.66 176.041C244.258 176.041 243.849 175.986 243.454 175.944C241.728 175.792 240.473 175.118 240.591 174.556C240.708 173.994 242.234 173.723 244.057 173.8L245.333 173.848C247.205 173.883 248.612 174.334 248.356 174.987" fill="#F36A1C"></path><path d="M314.466 331.375C294.463 336.234 274.689 341.883 254.596 346.331C243.676 348.927 233.436 340.28 229.379 330.924C217.877 301.415 208.378 271.822 203.095 240.529C202.083 231.868 207.2 221.187 216.851 220.139C231.82 218.001 246.762 215.656 261.745 213.622C270.689 212.984 279.224 220.139 279.875 229.272C283.952 261.509 294.435 285.966 316.338 310.229C323.826 316.787 326.8 328.731 314.466 331.375Z" fill="white">
            </path><path d="M286.351 288.763C281.026 292.413 273.282 293.829 267.083 295.592C264.233 296.404 261.322 297.237 258.472 297.993C250.36 300.159 232.922 302.851 232.922 302.851C232.853 302.615 245.867 298.306 251.878 296.605C254.783 295.793 257.723 294.96 260.649 294.121C268.858 291.754 277.712 288.687 286.351 288.721" fill="#F36A1C"></path><path d="M292.272 298.146C286.822 301.977 278.717 303.497 272.318 305.364C269.35 306.232 266.313 307.106 263.304 307.918C254.929 310.222 236.833 313.158 236.833 313.158C236.77 312.936 250.207 308.383 256.316 306.641C259.332 305.78 262.382 304.871 265.412 303.99C273.982 301.505 283.162 298.202 292.237 298.146" fill="#F36A1C"></path><path d="M300.218 308.758C295.226 313.206 285.658 314.476 279.147 316.392C275.986 317.315 272.769 318.245 269.621 319.112C260.774 321.542 241.707 324.665 241.707 324.665C241.645 324.443 255.692 319.716 262.084 317.863C265.253 316.947 268.477 315.989 271.68 315.053C280.811 312.388 290.553 308.883 300.218 308.758Z" fill="#F36A1C"></path><path d="M264.858 252.105C263.794 248.361 262.339 244.739 260.517 241.299C260.35 241.009 260.091 240.782 259.781 240.656C259.47 240.531 259.127 240.513 258.805 240.605C256.33 241.431 254.055 242.299 251.961 243.215C251.441 243.444 251.435 243.909 251.961 244.249C252.759 244.776 253.563 245.304 254.381 245.831C254.901 246.164 255.026 247.518 255.075 247.559C255.123 247.601 254.562 249.586 253.965 251.647C253.84 252.07 253.723 252.501 253.605 252.91C251.573 257.255 249.396 263.265 246.456 262.723C243.517 262.182 239.468 254.673 237.332 255.672C230.08 259.052 227.237 275.715 227.168 284.613C227.168 287.916 232.243 288.7 233.179 288.36C236.833 287.049 235.661 273.141 238.49 267.956C240.57 264.105 245.298 269.733 247.066 270.295C251.92 271.822 257.578 261.53 259.401 255.554C259.956 254.139 260.46 252.75 260.913 251.39C260.94 251.257 261.002 251.133 261.093 251.031C261.184 250.929 261.299 250.853 261.428 250.81C261.558 250.768 261.696 250.759 261.829 250.787C261.963 250.814 262.086 250.876 262.188 250.967C262.882 251.48 263.575 252.001 264.268 252.515C264.712 252.841 265.01 252.674 264.858 252.105Z" fill="#2A0316"></path><path d="M68.4659 235.124C48.8652 231.467 29.951 225.609 10.5445 221.175C4.02021 220.238 -3.95317 214.928 2.22447 207.829C20.6049 178.75 37.6609 146.318 43.055 112.006C43.5404 103.359 50.2242 97.6193 58.78 97.9247C74.9417 97.9594 91.1034 97.9247 107.265 98.2925C116.611 98.8963 123.143 107.898 121.222 117.149C115.488 152.086 105.65 186.12 98.4944 220.758C95.7002 233.327 79.4692 237.345 68.4659 235.124Z" fill="white"></path><path d="M83.0399 184.954C67.0932 183.448 51.2366 181.081 35.3245 178.978C30.9772 178.444 29.951 173.551 32.6828 167.673C37.9929 156.088 42.7045 144.237 46.7991 132.167C48.5602 126.539 52.9283 122.569 57.2339 122.958C71.794 124.269 86.3957 125.602 100.99 126.74C105.795 127.101 108.728 131.98 107.23 137.9C104.076 150.218 100.637 162.44 97.0592 174.641C95.2842 180.741 88.8154 185.405 83.0399 184.954Z" fill="#B69DFC"></path><path d="M60.1875 138.948C59.5635 141.786 56.3395 145.146 53.9474 145.395C51.5554 145.645 49.9885 142.363 50.6472 139.531C51.3058 136.699 54.5506 133.722 56.9287 133.472C59.3069 133.222 60.8184 136.103 60.1875 138.948Z" fill="#2A0316"></path><path d="M84.5581 198.737C76.5015 201.104 66.774 199.119 58.5926 198.043C55.3478 197.627 52.1168 197.127 49.0731 196.655C41.1413 195.336 24.5844 191.381 24.5844 191.381C24.5844 191.096 38.5066 191.776 44.8645 192.658C47.8944 193.081 51.063 193.553 54.3078 193.997C64.2919 195.385 74.8375 195.926 84.5581 198.737Z" fill="#F064FC"></path><path d="M81.5285 208.28C73.5204 210.966 62.8083 208.28 54.7655 207.079C51.4306 206.6 48.1234 206.031 45.0034 205.462C36.8289 203.963 19.9392 199.855 19.9392 199.855C19.9392 199.626 34.222 200.493 40.5868 201.562C43.686 202.082 46.9308 202.589 50.2589 203.096C60.6104 204.664 71.4265 205.455 81.5285 208.28Z" fill="#F064FC"></path><path d="M78.4569 218.385C70.2964 220.599 59.0435 217.878 50.8413 216.358C47.3746 215.72 44.0049 215.102 40.8017 214.436C32.3499 212.68 15.0789 208.294 15.0789 208.294C15.0789 208.12 29.5767 209.425 36.1148 210.681C39.2903 211.292 42.6183 211.889 46.0365 212.5C56.6792 214.38 68.1123 215.185 78.4569 218.385Z" fill="#F064FC"></path><path d="M107.938 116.92C101.524 118.939 93.8561 117.891 87.2347 117.51C84.4613 117.357 81.5909 117.156 78.8384 116.934C71.0591 116.316 54.9667 113.748 54.9667 113.748C54.9667 113.526 68.1402 113.311 74.2485 113.616L82.9083 114.074C90.8262 114.518 100.325 114.074 107.938 116.92Z" fill="#F064FC"></path><path d="M107.224 138.08C102.37 135.304 83.449 155.382 75.9471 162.482C69.1593 168.894 64.715 154.848 60.8323 153.751C53.5522 151.669 39.8588 163.127 32.2599 168.769C32.2599 168.839 32.1975 168.908 32.1697 168.971C31.9201 169.769 31.6913 170.511 31.4764 171.212C30.4641 175.501 31.8161 178.729 35.3036 179.159C51.2088 181.241 67.0307 183.628 83.0121 185.134C88.7876 185.592 95.2565 180.922 97.0592 174.821C100.644 162.648 104.069 150.399 107.224 138.08Z" fill="#2A0316"></path><path d="M334.547 265.03C356.985 269.665 397.744 246.492 398.666 236.06C399.416 227.617 389.433 226.446 377.735 194.508C368.474 169.204 374.118 156.761 367.558 151.124C361.358 145.791 316.718 151.825 306.231 161.472C296.132 170.746 322.797 262.588 334.547 265.03Z" fill="white"></path><path d="M379.098 226.202C380.153 226.468 374.189 229.979 365.846 233.861L360.054 236.55C351.705 240.397 343.734 243.452 342.334 243.47C340.934 243.489 346.852 240.289 355.49 236.215C357.479 235.272 359.465 234.334 361.457 233.385C370.098 229.253 378.03 225.952 379.091 226.219" fill="#F064FC"></path><path d="M374.436 212.42C375.487 212.729 369.373 215.989 360.871 219.51L354.972 221.958C346.459 225.456 338.367 228.172 336.965 228.13C335.563 228.088 341.617 225.141 350.431 221.415L356.515 218.837C365.327 215.07 373.396 212.101 374.438 212.414" fill="#F064FC"></path><path d="M330.68 213.655C329.669 213.249 336.07 210.587 344.878 207.881C346.918 207.249 348.958 206.625 350.995 206.009C359.811 203.333 368.132 201.395 369.526 201.572C370.92 201.749 364.601 204.108 355.472 206.988C353.375 207.642 351.274 208.305 349.17 208.978C339.978 211.866 331.664 214.05 330.68 213.655Z" fill="#F064FC"></path><path d="M365.29 184.99C366.301 185.396 359.817 187.92 350.935 190.398L344.775 192.115C335.877 194.553 327.514 196.282 326.125 196.075C324.737 195.867 331.119 193.665 340.334 191.03L346.696 189.204C355.923 186.508 364.289 184.589 365.29 184.99Z" fill="#F064FC"></path><path d="M364.542 171.189C365.519 171.667 358.926 173.836 349.917 175.874C347.832 176.356 345.751 176.823 343.673 177.273C334.67 179.267 326.216 180.564 324.849 180.272C323.481 179.98 329.959 178.114 339.3 175.953C341.453 175.458 343.603 174.957 345.75 174.451C355.084 172.261 363.571 170.7 364.545 171.183" fill="#F064FC"></path><path d="M189.052 118.653C176.852 126.466 126.316 109.871 120.057 102.266C112.041 92.5291 136.17 20.6131 142.655 10.0314C148.124 1.10929 207.112 13.9199 210.725 22.193C214.54 30.9498 196.425 113.925 189.052 118.653Z" fill="white"></path><path d="M191.464 76.8648C174.746 76.7056 133.04 66.6077 134.841 58.0591C136.678 49.3023 143.905 23.185 148.681 19.8354C153.317 16.5776 206.413 28.1329 204.564 37.3551C203.1 44.4646 195.568 76.9077 191.464 76.8648Z" fill="#B69DFC"></path><path d="M134.853 59.0021C134.853 59.0021 141.59 51.8068 155.283 55.481C168.977 59.1551 172.339 70.6798 179.216 59.9206C184.624 51.4822 195.023 47.1712 202.004 48.2857C202.004 48.2857 200.988 52.3457 199.555 57.8202C198.042 63.7295 195.36 76.0503 191.863 77.1158C188.366 78.1813 159.772 72.4679 150.831 69.3081C135.735 63.9438 133.659 60.9188 134.853 59.0021Z" fill="#967FD6"></path><path d="M183.007 43.1846C182.732 48.0406 177.581 52.9824 172.725 52.713C167.868 52.4435 163.177 46.1852 163.453 41.2863C163.728 36.3873 169.577 32.1008 174.476 32.3764C179.376 32.6519 183.289 38.3285 183.007 43.1846Z" fill="#2A0316"></path>
         </svg>
      </section>
   )
}

export default Info