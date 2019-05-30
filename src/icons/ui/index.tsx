import React from 'react'

export const ArrowRightIcon = ({ fill = 'black' }) => (
  <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
    <g fill="none">
      <g>
        <path
          d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
          transform="matrix(0 1 -1 0 35 0)"
          fill={fill}
        />
        <line
          y1="-0.5"
          x2="30"
          y2="-0.5"
          transform="translate(0 4)"
          stroke={fill}
        />
      </g>
    </g>
  </svg>
)

export const CheckIcon = ({ fill = 'white' }) => (
  <svg width="18" height="14" viewBox="0 0 18 14" version="1.1">
    <g fill="none">
      <g id="check">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 5.6 10.6L 1.4 6.4L 0 7.8L 5.6 13.4L 17.6 1.4L 16.2 0L 5.6 10.6Z"
          transform="translate(0.399902 0.600098)"
          fill={fill}
        />
      </g>
    </g>
  </svg>
)

export const ExIcon = ({ fill = 'black' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" version="1.1">
    <g fill="none">
      <path
        id="Stroke 1"
        d="M 0 0L 24 0L 24 24L 0 24L 0 0Z"
        strokeWidth="0"
        stroke={fill}
        strokeOpacity="0.01"
      />
      <path
        id="Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 14 1.4L 12.6 0L 7 5.6L 1.4 0L 0 1.4L 5.6 7L 0 12.6L 1.4 14L 7 8.4L 12.6 14L 14 12.6L 8.4 7L 14 1.4Z"
        transform="translate(5 5)"
        fill={fill}
      />
    </g>
  </svg>
)

export const ChevronDownIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" version="1.1">
    <g fill="none">
      <g id="chevron-down-icon">
        <path
          id="Stroke 1"
          d="M 0 0L 24 0L 24 24L 0 24L 0 0Z"
          transform="translate(0 1)"
          stroke="black"
          strokeOpacity="0.01"
          strokeWidth="0"
        />
        <path
          id="&#239;&#132;&#135;"
          d="M 12.0034 0.998282C 12.0034 0.902062 11.9553 0.793814 11.8832 0.72165L 11.2818 0.120276C 11.2096 0.0481109 11.1014 0 11.0052 0C 10.9089 0 10.8007 0.0481109 10.7285 0.120276L 6.00172 4.84708L 1.27491 0.120276C 1.20275 0.0481109 1.0945 0 0.998282 0C 0.890034 0 0.793814 0.0481109 0.721649 0.120276L 0.120275 0.72165C 0.0481099 0.793814 0 0.902062 0 0.998282C 0 1.0945 0.0481099 1.20275 0.120275 1.27491L 5.72509 6.87973C 5.79725 6.95189 5.9055 7 6.00172 7C 6.09794 7 6.20619 6.95189 6.27835 6.87973L 11.8832 1.27491C 11.9553 1.20275 12.0034 1.0945 12.0034 0.998282Z"
          transform="translate(6 9)"
          fill="black"
        />
      </g>
    </g>
  </svg>
)

export const PencilIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17">
    <g fill="none">
      <path
        id="Vector"
        d="M 16.7 4C 17.1 3.6 17.1 3 16.7 2.6L 14.4 0.3C 14 -0.1 13.4 -0.1 13 0.3L 11 2.3L 14.7 6L 16.7 4ZM 13.7 7L 10 3.3L 0 13.3L 0 17L 3.7 17L 13.7 7Z"
        fill="black"
      />
    </g>
  </svg>
)

export const SubmittedCheckIcon = () => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.75"
      y="0.75"
      width="88.5"
      height="88.5"
      rx="14.25"
      stroke="black"
      strokeWidth="1.5"
    />
    <path
      d="M25.0713 47.4684L39.7878 60.4284L64.9284 29.5713"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
)

export const CloseIcon = ({ fill = '#73737D' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill={fill}
    />
  </svg>
)

export const CreateIcon = ({ fill = '#479FFA' }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H4C4.55228 5 5 5.44772 5 6C5 6.55228 4.55228 7 4 7Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6C12 5.44772 11.5523 5 11 5H8C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H11C11.5523 7 12 6.55228 12 6Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 11V8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V4C5 4.55228 5.44772 5 6 5C6.55228 5 7 4.55228 7 4Z"
      fill={fill}
    />
  </svg>
)

export const GoToIcon = ({ fill = '#73737D' }) => (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.37273 0V2.625H0V4.375H6.37273V7L10 3.5L6.37273 0Z"
      fill={fill}
    />
  </svg>
)

export const MailIcon = ({ fill = '#73737D' }) => (
  <svg
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7984 9.4977H1.54263C0.690658 9.4977 0 8.80704 0 7.95507V1.78456C0 0.932594 0.690658 0.241936 1.54263 0.241936H11.3126C11.7741 0.215462 12.1966 0.500161 12.3453 0.937855C12.494 1.37555 12.3323 1.85867 11.9502 2.1188L7.16807 5.79539C6.58955 6.24012 5.77856 6.21867 5.22436 5.74397L2.25738 3.20378C2.11776 3.08437 2.05245 2.89954 2.08605 2.71892C2.11966 2.5383 2.24707 2.38933 2.42029 2.32812C2.59351 2.26692 2.78623 2.30277 2.92585 2.42218L5.89283 4.96237C6.08165 5.11554 6.35193 5.11554 6.54074 4.96237L11.3229 1.28578L1.54263 1.27035C1.25864 1.27035 1.02842 1.50057 1.02842 1.78456V7.95507C1.02842 8.23906 1.25864 8.46928 1.54263 8.46928H10.7984C11.0824 8.46928 11.3126 8.23906 11.3126 7.95507V3.8414C11.3126 3.55741 11.5428 3.32719 11.8268 3.32719C12.1108 3.32719 12.341 3.55741 12.341 3.8414V7.95507C12.341 8.80704 11.6504 9.4977 10.7984 9.4977Z"
      fill={fill}
    />
  </svg>
)

export const BookIcon = ({ fill = '#73737D' }) => (
  <svg
    width="10"
    height="11"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.96464 10.987C4.77054 10.9818 4.58193 10.9215 4.42088 10.813C3.31496 10.0757 1.96151 9.80777 0.658083 10.0681C0.49539 10.1031 0.325634 10.0616 0.197359 9.95561C0.0690845 9.8496 -0.00358354 9.69068 0.000136149 9.52431V1.09064C0.000136149 0.790326 0.243585 0.546878 0.543894 0.546878H2.07729C2.53891 0.546444 2.99894 0.601209 3.44756 0.710005C3.63503 0.762457 3.78027 0.910936 3.82858 1.09951C3.87689 1.28809 3.82092 1.48811 3.68176 1.62424C3.5426 1.76036 3.3414 1.81191 3.15393 1.75946C2.75675 1.66607 2.34923 1.62404 1.94135 1.63439H1.08765V8.89899C2.46062 8.77372 3.83539 9.11885 4.98639 9.87776C6.13739 9.11885 7.51217 8.77372 8.88513 8.89899V1.66702C7.71509 1.53711 6.53672 1.82401 5.55734 2.47722V7.75166C5.55734 8.05197 5.31389 8.29542 5.01358 8.29542C4.71327 8.29542 4.46982 8.05197 4.46982 7.75166V2.21621C4.46853 2.04601 4.54701 1.88503 4.68189 1.78121C6.0823 0.734928 7.86397 0.339001 9.5757 0.693692C9.82864 0.750653 10.0062 0.978262 9.99984 1.23745V9.56238C10.0036 9.72875 9.93089 9.88766 9.80261 9.99367C9.67434 10.0997 9.50458 10.1411 9.34189 10.1061C8.03846 9.84584 6.68501 10.1138 5.57909 10.8511C5.39366 10.9599 5.17866 11.0074 4.96464 10.987Z"
      fill={fill}
    />
  </svg>
)

export const LightbulbIcon = ({ fill = '#73737D' }) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.97993 9.96886C4.67396 9.96886 4.42592 9.72083 4.42592 9.41486C4.42592 9.10889 4.67396 8.86085 4.97993 8.86085C5.09454 8.86085 5.20445 8.81532 5.28549 8.73428C5.36653 8.65324 5.41206 8.54333 5.41206 8.42872V8.34008C5.39573 7.42739 5.69079 6.53637 6.24861 5.8138C6.99967 4.87787 7.09468 3.57534 6.48739 2.54033C5.8801 1.50531 4.6967 0.952889 3.51331 1.15199C2.32992 1.3511 1.39244 2.26035 1.15727 3.43711C0.997512 4.25633 1.19949 5.10462 1.71128 5.76394C2.27863 6.50292 2.58631 7.40843 2.58661 8.34008V8.42872C2.58661 8.66738 2.78008 8.86085 3.01874 8.86085C3.32471 8.86085 3.57275 9.10889 3.57275 9.41486C3.57275 9.72083 3.32471 9.96886 3.01874 9.96886C2.16814 9.96886 1.4786 9.27932 1.4786 8.42872V8.34008C1.47788 7.65254 1.25001 6.9845 0.830409 6.43983C-0.442812 4.78582 -0.230146 2.43084 1.31879 1.03169C2.86773 -0.36747 5.23213 -0.340365 6.74859 1.09393C8.26504 2.52823 8.42366 4.88747 7.11286 6.51185C6.71618 7.03741 6.50919 7.68183 6.52561 8.34008V8.42872C6.52561 8.83815 6.36259 9.23074 6.07256 9.51973C5.78253 9.80872 5.38936 9.97034 4.97993 9.96886ZM5.65498 11.0772C5.65498 10.7712 5.40695 10.5231 5.10098 10.5231H2.88494C2.57897 10.5231 2.33094 10.7712 2.33094 11.0772C2.33094 11.3831 2.57897 11.6312 2.88494 11.6312H5.10098C5.40695 11.6312 5.65498 11.3831 5.65498 11.0772ZM5.10236 12.7376C5.10236 12.4316 4.85433 12.1836 4.54836 12.1836H3.44034C3.13437 12.1836 2.88633 12.4316 2.88633 12.7376C2.88633 13.0436 3.13437 13.2916 3.44034 13.2916H4.54836C4.85433 13.2916 5.10236 13.0436 5.10236 12.7376Z"
      fill={fill}
    />
  </svg>
)

export const LaptopIcon = ({ fill = '#73737D' }) => (
  <svg
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.6925 9.42986H0.808614C0.502335 9.42986 0.222344 9.25682 0.0853718 8.98288C-0.0516001 8.70893 -0.0220406 8.38111 0.161727 8.13609L1.23987 6.69676C1.30986 6.60345 1.34769 6.48996 1.34769 6.37332V1.88284C1.34769 0.989678 2.07174 0.265625 2.96491 0.265625H9.43378C10.3269 0.265625 11.051 0.989678 11.051 1.88284V5.65635C11.051 6.54952 10.3269 7.27357 9.43378 7.27357H4.04305C3.74533 7.27357 3.50398 7.03222 3.50398 6.7345C3.50398 6.43678 3.74533 6.19543 4.04305 6.19543H9.43378C9.7315 6.19543 9.97285 5.95408 9.97285 5.65635V1.88284C9.97285 1.58512 9.7315 1.34377 9.43378 1.34377H2.96491C2.66718 1.34377 2.42583 1.58512 2.42583 1.88284V6.37332C2.42583 6.72324 2.31234 7.06372 2.10239 7.34365L1.34769 8.35172H11.2558L11.1049 8.05523C10.9833 7.79056 11.094 7.47719 11.3548 7.34752C11.6156 7.21785 11.9322 7.31878 12.0698 7.57545L12.4149 8.26547C12.5399 8.51595 12.5265 8.81329 12.3794 9.0515C12.2323 9.2897 11.9725 9.43487 11.6925 9.43526V9.42986Z"
      fill={fill}
    />
  </svg>
)

export const ViewIcon = ({ fill = '#73737D' }) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.99136 9.08475C4.1989 9.02382 1.61876 7.58095 0.10487 5.23368C0.0368732 5.13626 0.000281263 5.02039 0 4.90159C0 4.77732 0.0364628 4.65577 0.10487 4.55202C1.57466 2.15808 4.18223 0.699219 6.99136 0.699219C9.80049 0.699219 12.4081 2.15808 13.8778 4.55202C14.0098 4.72224 14.0371 4.95138 13.9488 5.14782C13.8605 5.34427 13.671 5.47598 13.4561 5.49029C13.2412 5.50461 13.0359 5.3992 12.9224 5.2162C11.6238 3.18449 9.40179 1.92943 6.99136 1.86617C4.72187 1.91991 2.61132 3.04323 1.29923 4.89576C2.61132 6.7483 4.72187 7.87161 6.99136 7.92535C8.56151 7.91345 10.079 7.35753 11.2852 6.3523C11.5356 6.16867 11.886 6.21367 12.0819 6.4546C12.2777 6.69554 12.2502 7.04774 12.0193 7.25535C10.6054 8.4284 8.8285 9.07492 6.99136 9.08475ZM8.73884 4.78103C8.73884 3.81573 7.95631 3.03319 6.991 3.03319C6.66924 3.03319 6.40839 3.29404 6.40839 3.61581C6.40839 3.93758 6.66924 4.19842 6.991 4.19842C7.31277 4.19842 7.57362 4.45927 7.57362 4.78103C7.57362 5.1028 7.31277 5.36365 6.991 5.36365C6.66924 5.36365 6.40839 5.1028 6.40839 4.78103C6.40839 4.45927 6.14755 4.19842 5.82578 4.19842C5.50401 4.19842 5.24316 4.45927 5.24316 4.78103C5.24316 5.74634 6.0257 6.52887 6.991 6.52887C7.95631 6.52887 8.73884 5.74634 8.73884 4.78103Z"
      fill={fill}
    />
  </svg>
)

export const SlashIcon = ({ fill = '#73737D' }) => (
  <svg
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.713 12.9299C11.8657 13.0371 12.0654 13.0505 12.231 12.9644C12.3965 12.8784 12.5004 12.7073 12.5004 12.5207V8.72312C12.5004 8.55986 12.4207 8.40688 12.2869 8.31334L2.27673 1.31483C2.12397 1.20803 1.9245 1.19506 1.7592 1.28119C1.59391 1.36731 1.49023 1.53822 1.49023 1.72461V5.48949C1.49023 5.65236 1.56956 5.80503 1.70284 5.89864L11.713 12.9299Z"
      stroke={fill}
      stroke-linejoin="round"
    />
  </svg>
)

export const FeyIcon = ({ fill = '#73737D' }) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.65387 11.4962C6.76371 11.6063 6.85096 11.7378 6.91053 11.8829C6.9701 12.028 7.00078 12.1838 7.00078 12.3411C7.00078 12.4985 6.9701 12.6543 6.91053 12.7994C6.85096 12.9445 6.76371 13.0759 6.65387 13.1861L5.85803 13.9989L5.04898 13.1692C4.60491 12.7137 4.3421 12.1055 4.31158 11.4629C4.28107 10.8202 4.48504 10.1888 4.88387 9.69141L6.65387 11.4962Z"
      fill={fill}
    />
    <path
      d="M6.65824 5.17029C6.87848 5.39342 7.00218 5.69583 7.00218 6.01114C7.00218 6.32645 6.87848 6.62886 6.65824 6.85199L4.59733 8.93674C4.30309 9.23251 4.06989 9.58447 3.91128 9.97218C3.75266 10.3599 3.67178 10.7756 3.67335 11.1952C3.67385 11.4141 3.69629 11.6324 3.74033 11.8467L2.92798 11.0024C2.43381 10.5017 2.15625 9.82317 2.15625 9.11568C2.15625 8.4082 2.43381 7.72963 2.92798 7.22898L5.8167 4.30859L6.65824 5.17029Z"
      fill={fill}
    />
    <path
      d="M6.64989 0.86403C6.87387 1.08979 6.99967 1.39583 6.99967 1.71491C6.99967 2.034 6.87387 2.34004 6.64989 2.5658V2.5658L2.49459 6.7545C2.11843 7.13269 1.84186 7.59933 1.68989 8.1122C1.53791 8.62507 1.51533 9.16799 1.62419 9.69186L0.783382 8.8436C0.535051 8.59405 0.338035 8.29765 0.203612 7.97135C0.0691904 7.64506 0 7.29528 0 6.94203C0 6.58879 0.0691904 6.23901 0.203612 5.91271C0.338035 5.58642 0.535051 5.29002 0.783382 5.04047L5.78993 0L6.64989 0.86403Z"
      fill={fill}
    />
  </svg>
)