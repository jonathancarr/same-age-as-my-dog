import React from 'react';

const Phoebe = ({ className }) => (
  <svg className={`phoebe ${className}`} viewBox="0 0 1000 800">
    <g className="phoebe__g">
      <path className="phoebe__right-ear" d="M895.298 459.571C862.675 159.8 742.039 188.039 685.799 239.63C506.782 102.371 624.801 459.402 706.188 655.074C782.817 714.811 927.92 759.343 895.298 459.571Z" fill="#AF4319" stroke="black" stroke-width="5"/>
      <path className="phoebe__left-ear" d="M104.703 459.433C137.331 159.259 257.985 187.536 314.233 239.197C493.277 101.753 375.24 459.263 293.841 655.198C217.2 715.015 72.0754 759.606 104.703 459.433Z" fill="#AF4319" stroke="black" stroke-width="5"/>
      <path className="phoebe__mouth" d="M432.302 655.295C411.4 636.942 404.263 551.805 420.577 534.981C420.577 503.373 566.891 507.962 577.087 534.981C587.283 562.001 588.303 627.766 557.714 655.295C527.126 682.825 461.057 680.544 432.302 655.295Z" fill="#EEEEEE" stroke="black" stroke-width="5"/>
      <path className="phoebe__mouth-inner" d="M432.302 640.001C411.4 621.648 404.263 536.511 420.577 519.687C420.577 488.079 566.891 492.667 577.087 519.687C587.283 546.707 588.303 612.472 557.714 640.001C527.126 667.531 461.057 665.25 432.302 640.001Z" fill="#E27396" stroke="black"/>
      <path className="phoebe__head" d="M409.567 701.59C473.293 701.59 465.646 655.708 494.705 655.708C523.764 655.708 513.363 701.59 598.195 701.59C661.921 701.59 716.212 678.126 743.49 405.393C768.818 152.152 609.921 99 504.901 99C399.881 99 222.978 135.196 251.527 405.393C280.076 675.59 345.841 701.59 409.567 701.59Z" fill="white" stroke="black" stroke-width="5"/>
      <path className="phoebe__nose" d="M571.175 512.452C574.234 470.648 533.45 458.923 500.312 458.923C455.449 458.923 426.9 482.374 429.959 512.452C433.018 542.531 482.979 578.727 500.312 577.198C517.646 575.668 568.116 554.257 571.175 512.452Z" fill="black" stroke="black"/>
      <mask id="headMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="245" y="96" width="504" height="609">
        <path className="phoebe__head--mask" d="M409.567 701.59C473.293 701.59 465.646 655.708 494.705 655.708C523.764 655.708 513.363 701.59 598.195 701.59C661.921 701.59 716.212 678.126 743.49 405.393C768.818 152.152 609.921 99 504.901 99C399.881 99 222.978 135.196 251.527 405.393C280.076 675.59 345.841 701.59 409.567 701.59Z" fill="white" stroke="black"/>
      </mask>
      <g mask="url(#headMask)">
        <g>
          <path className="phoebe__brown-left" d="M440.706 382.318C371.781 426.365 299.49 592.358 277.568 661.692C85.0658 80.513 285.046 44.3169 403.491 107.023C444.615 180.435 509.632 338.271 440.706 382.318Z" fill="#AF4319"/>
        </g>
        <g>
          <path className="phoebe__brown-right" d="M552.905 382.387C628.73 426.445 708.257 592.476 732.373 661.826C944.146 80.512 724.147 44.3075 593.846 107.028C548.605 180.457 477.079 338.33 552.905 382.387Z" fill="#AF4319"/>
        </g>

        <path d="M705.254 375.557C705.254 355.084 695.244 314.138 655.204 314.138C591.504 314.138 583.92 384.863 583.92 398.822C583.92 412.781 621.079 431.393 659.754 431.393C690.694 431.393 702.979 394.169 705.254 375.557Z" fill="#EEEEEE" stroke="black"/>
        <circle cx="637.45" cy="385.001" r="40.2747" fill="black"/>

        <path d="M291.292 375.557C291.292 355.084 301.302 314.138 341.342 314.138C405.042 314.138 412.626 384.863 412.626 398.822C412.626 412.781 375.467 431.393 336.792 431.393C305.852 431.393 293.567 394.169 291.292 375.557Z" fill="#EEEEEE" stroke="black"/>
        <circle cx="360.116" cy="385.001" r="40.2747" fill="black"/>
      </g>
    </g>
  </svg>
)

export default Phoebe;