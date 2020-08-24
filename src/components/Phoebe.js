import React, { useState, useMemo, useLayoutEffect } from 'react';
import { selectAll } from 'd3-selection';
import 'd3-transition';
import './phoebe.scss';

const LEFT_EYE = "M291.292 375.557C291.292 355.084 301.302 314.138 341.342 314.138C405.042 314.138 412.626 384.863 412.626 398.822C412.626 412.781 375.467 431.393 336.792 431.393C305.852 431.393 293.567 394.169 291.292 375.557Z";
const LEFT_EYE_ANGRY = "M294.612 369.238C294.612 349.159 307.73 326 347 326C397.8 354 413.612 378.365 413.612 392.056C413.612 405.746 377.169 424 339.237 424C308.892 424 296.844 387.492 294.612 369.238Z";

const RIGHT_EYE = "M705.254 375.557C705.254 355.084 695.244 314.138 655.204 314.138C591.504 314.138 583.92 384.863 583.92 398.822C583.92 412.781 621.079 431.393 659.754 431.393C690.694 431.393 702.979 394.169 705.254 375.557Z";
const RIGHT_EYE_ANGRY = "M701 370.238C701 350.159 687.883 326 648.613 326C593.313 357.5 582 379.365 582 393.056C582 406.746 618.444 425 656.375 425C686.72 425 698.769 388.492 701 370.238Z";

const Phoebe = ({ className, expression, setExpression }) => {

  useLayoutEffect(() => {
    if (expression === "disgruntled") {
      selectAll(".phoebe__sclera--right")
        .transition()
        .attr("d", RIGHT_EYE_ANGRY)
      selectAll(".phoebe__sclera--left")
        .transition()
        .attr("d", LEFT_EYE_ANGRY)
    } else {
      selectAll(".phoebe__sclera--right")
        .transition()
        .attr("d", RIGHT_EYE)
      selectAll(".phoebe__sclera--left")
        .transition()
        .attr("d", LEFT_EYE)
    }
  }, [expression]);

  return (
    <svg className={`phoebe phoebe--${expression} ${className}`} viewBox="0 0 1000 800">
      <g
        onMouseEnter={() => { if (expression === "normal" || expression.startsWith("looking")) setExpression("happy") }}
        onMouseLeave={() => { if (expression === "happy") setExpression("normal") }}
      >
        <path className="phoebe__ear phoebe__ear--right" d="M895.298 459.571C862.675 159.8 742.039 188.039 685.799 239.63C506.782 102.371 624.801 459.402 706.188 655.074C782.817 714.811 927.92 759.343 895.298 459.571Z" fill="#AF4319" stroke="black" stroke-width="5"/>
        <path className="phoebe__ear phoebe__ear--left" d="M104.703 459.433C137.331 159.259 257.985 187.536 314.233 239.197C493.277 101.753 375.24 459.263 293.841 655.198C217.2 715.015 72.0754 759.606 104.703 459.433Z" fill="#AF4319" stroke="black" stroke-width="5"/>
        <g className="phoebe__mouth">
          <path className="phoebe__mouth--outer" d="M432.302 655.295C411.4 636.942 404.263 551.805 420.577 534.981C420.577 503.373 566.891 507.962 577.087 534.981C587.283 562.001 588.303 627.766 557.714 655.295C527.126 682.825 461.057 680.544 432.302 655.295Z" fill="#EEEEEE" stroke="black" stroke-width="5"/>
          <path className="phoebe__mouth-inner" d="M432.302 640.001C411.4 621.648 404.263 536.511 420.577 519.687C420.577 488.079 566.891 492.667 577.087 519.687C587.283 546.707 588.303 612.472 557.714 640.001C527.126 667.531 461.057 665.25 432.302 640.001Z" fill="#E27396" stroke="black"/>
        </g>
        <path className="phoebe__head" d="M409.567 701.59C473.293 701.59 465.646 655.708 494.705 655.708C523.764 655.708 513.363 701.59 598.195 701.59C661.921 701.59 716.212 678.126 743.49 405.393C768.818 152.152 609.921 99 504.901 99C399.881 99 222.978 135.196 251.527 405.393C280.076 675.59 345.841 701.59 409.567 701.59Z" fill="white" stroke="black" stroke-width="5"/>
        <path className="phoebe__nose" d="M571.175 512.452C574.234 470.648 533.45 458.923 500.312 458.923C455.449 458.923 426.9 482.374 429.959 512.452C433.018 542.531 482.979 578.727 500.312 577.198C517.646 575.668 568.116 554.257 571.175 512.452Z" fill="black" stroke="black"/>
        <mask id="headMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="245" y="96" width="504" height="609">
          <path className="phoebe__head--mask" d="M409.567 701.59C473.293 701.59 465.646 655.708 494.705 655.708C523.764 655.708 513.363 701.59 598.195 701.59C661.921 701.59 716.212 678.126 743.49 405.393C768.818 152.152 609.921 99 504.901 99C399.881 99 222.978 135.196 251.527 405.393C280.076 675.59 345.841 701.59 409.567 701.59Z" fill="white" stroke="black"/>
        </mask>
        <g mask="url(#headMask)">
          <path className="phoebe__brown-left" d="M440.706 382.318C371.781 426.365 299.49 592.358 277.568 661.692C85.0658 80.513 285.046 44.3169 403.491 107.023C444.615 180.435 509.632 338.271 440.706 382.318Z" fill="#AF4319"/>
          <path className="phoebe__brown-right" d="M552.905 382.387C628.73 426.445 708.257 592.476 732.373 661.826C944.146 80.512 724.147 44.3075 593.846 107.028C548.605 180.457 477.079 338.33 552.905 382.387Z" fill="#AF4319"/>

          <g className="phoebe__eye phoebe__eye--right">
            <mask id="phoebe__eye-mask--right" mask-type="alpha" maskUnits="userSpaceOnUse" x="245" y="96" width="504" height="609">
              <path className="phoebe__sclera phoebe__sclera--right" d={RIGHT_EYE} fill="#EEEEEE" stroke="black"/>
            </mask>
            <path className="phoebe__sclera phoebe__sclera--right" d={RIGHT_EYE} fill="#EEEEEE" stroke="black"/>
            <g mask="url(#phoebe__eye-mask--right)">
              <circle className="phoebe__pupil phoebe__pupil--right" cx="637.45" cy="385.001" r="40.2747" fill="black"/>
            </g>
          </g>

          <g className="phoebe__eye phoebe__eye--left">
            <mask id="phoebe__eye-mask--left">
              <path className="phoebe__sclera phoebe__sclera--left" d={LEFT_EYE} fill="#EEEEEE" stroke="black"/>
            </mask>
            <path className="phoebe__sclera phoebe__sclera--left" d={LEFT_EYE} fill="#EEEEEE" stroke="black">

            </path>
            <g mask="url(#phoebe__eye-mask--left)">
              <circle className="phoebe__pupil phoebe__pupil--left" cx="360.116" cy="385.001" r="40.2747" fill="black"/>
            </g>
          </g>

          <path className="phoebe__head-outline" d="M409.567 701.59C473.293 701.59 465.646 655.708 494.705 655.708C523.764 655.708 513.363 701.59 598.195 701.59C661.921 701.59 716.212 678.126 743.49 405.393C768.818 152.152 609.921 99 504.901 99C399.881 99 222.978 135.196 251.527 405.393C280.076 675.59 345.841 701.59 409.567 701.59Z" fill="none" stroke="black" stroke-width="5"/>
        </g>
        <g className="phoebe__party-hat">
          <path d="M273.325 196.448L212.378 -100.547L453.516 96.587C442.387 135.393 313.073 205.244 273.325 196.448Z" fill="#EA9AB2" stroke="black" stroke-width="5"/>
          <circle cx="211.853" cy="-90.9286" r="28.4286" fill="#E27396" stroke="black" stroke-width="5"/>
        </g>
        <g className="phoebe__old-hat">
          <path d="M433.982 73.2381C438.06 75.6852 439.08 84.7937 439.08 89.0421L464.57 79.3558C463.551 77.3166 460.492 72.3205 456.413 68.6499C451.315 64.0616 428.884 70.1793 433.982 73.2381Z" fill="#355070" stroke="black" stroke-width="5"/>
          <path d="M464.57 80.8852C520.139 73.748 743.944 94.65 704.179 169.591C701.521 174.601 697.195 179.381 691.434 183.928C617.002 286.97 289.197 270.023 269.315 261.356C253.409 254.423 252.151 244.006 253.511 239.664C247.554 237.458 244.001 234.834 243.314 231.788C194.883 193.043 409.001 88.0225 464.57 80.8852Z" fill="#355070"/>
          <path d="M253.511 239.664C247.554 237.458 244.001 234.834 243.314 231.788C194.883 193.043 409.001 88.0225 464.57 80.8852C520.139 73.748 743.944 94.65 704.179 169.591C701.521 174.601 697.195 179.381 691.434 183.928M253.511 239.664C252.151 244.006 253.409 254.423 269.315 261.356C289.197 270.023 617.002 286.97 691.434 183.928M253.511 239.664C313.601 261.92 618.267 241.677 691.434 183.928" fill="none" stroke="black" stroke-width="5"/>
        </g>
        <g className="phoebe__glasses">
          <path d="M703.159 372.494C693.779 354.957 726.1 339.357 743.434 333.749" fill="none" stroke="#4C5B61" stroke-width="5"/>
          <path d="M285.999 386.769C295.347 369.231 263.137 353.631 245.863 348.023" fill="none" stroke="#4C5B61" stroke-width="5"/>
          <path d="M428.374 406.141C432.039 386.078 560.344 388.168 562.962 406.141" fill="none" stroke="#4C5B61" stroke-width="10"/>
          <path d="M430.511 391.357C430.511 425.436 398.704 454.161 358.021 454.161C317.337 454.161 285.53 425.436 285.53 391.357C285.53 357.277 317.337 328.553 358.021 328.553C398.704 328.553 430.511 357.277 430.511 391.357Z" fill="none" stroke="#4C5B61" stroke-width="10"/>
          <path d="M706.826 391.357C706.826 425.436 675.019 454.161 634.335 454.161C593.652 454.161 561.845 425.436 561.845 391.357C561.845 357.277 593.652 328.553 634.335 328.553C675.019 328.553 706.826 357.277 706.826 391.357Z" fill="none" stroke="#4C5B61" stroke-width="10"/>
        </g>
      </g>
    </svg>
  );
}

export default Phoebe;