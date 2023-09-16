"use client";
import { useEffect, useState } from "react";

type ClockProps = {
  size: number;
  stroke1?: number;
  stroke2?: number;
  disableRealClock?: boolean;
};

export function Clock({
  size,
  stroke1 = 15,
  stroke2 = 20,
  disableRealClock = false,
}: ClockProps) {
  const [secondAngle, setSecondAngle] = useState<number>(0);
  const [minuteAngle, setMinuteAngle] = useState<number>(0);
  const [hourAngle, setHourAngle] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const currentSecond = currentTime.getSeconds();
      const currentMinute = currentTime.getMinutes();
      const currentHour = currentTime.getHours() % 12;
      setSecondAngle((prev) => (360 * currentSecond) / 60);
      setMinuteAngle((prev) => (360 * currentMinute) / 60);
      setHourAngle((prev) => (360 * currentHour) / 12);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Logo">
        <g id="pointers">
          <g id="minutes">
            <g id="Group 5">
              <path
                id="Line 1"
                d="M469.246 211.148L472.382 240.984"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3"
                d="M758.135 472.382L787.971 469.246"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 4"
                d="M211.148 529.873L240.984 526.737"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 6">
              <path
                id="Line 1_2"
                d="M439.265 215.897L445.502 245.241"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_2"
                d="M753.878 445.503L783.222 439.265"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 4_2"
                d="M215.897 559.854L245.241 553.617"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 7">
              <path
                id="Line 1_3"
                d="M409.945 223.753L419.215 252.285"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_3"
                d="M746.834 419.215L775.366 409.945"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 4_3"
                d="M223.753 589.175L252.285 579.904"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 8">
              <path
                id="Line 1_4"
                d="M381.606 234.632L393.808 262.038"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_4"
                d="M737.082 393.808L764.488 381.606"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 4_4"
                d="M234.631 617.513L262.038 605.311"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 9">
              <path
                id="Line 1_5"
                d="M329.102 264.945L346.736 289.215"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_5"
                d="M709.904 346.736L734.175 329.102"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 10">
              <path
                id="Line 1_6"
                d="M305.512 284.048L325.586 306.342"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_6"
                d="M692.777 325.586L715.072 305.512"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 11">
              <path
                id="Line 1_7"
                d="M284.048 305.512L306.342 325.586"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_7"
                d="M673.534 306.342L693.608 284.048"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 12">
              <path
                id="Line 1_8"
                d="M264.945 329.102L289.215 346.736"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_8"
                d="M652.384 289.215L670.017 264.945"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 13">
              <path
                id="Line 1_9"
                d="M234.631 381.606L262.038 393.808"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_9"
                d="M605.311 262.038L617.513 234.632"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 2"
                d="M737.082 605.311L764.488 617.514"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 14">
              <path
                id="Line 1_10"
                d="M223.753 409.945L252.285 419.215"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_10"
                d="M579.904 252.285L589.174 223.753"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 2_2"
                d="M746.834 579.904L775.366 589.175"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 15">
              <path
                id="Line 1_11"
                d="M215.896 439.265L245.241 445.503"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_11"
                d="M553.616 245.241L559.854 215.897"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 2_3"
                d="M753.877 553.617L783.222 559.854"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 16">
              <path
                id="Line 1_12"
                d="M211.148 469.247L240.984 472.382"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 3_12"
                d="M526.737 240.984L529.873 211.148"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
              <path
                id="Line 2_4"
                d="M758.135 526.737L787.97 529.873"
                stroke="#6D6D6D"
                strokeWidth={stroke1}
                strokeLinecap="round"
              />
            </g>
          </g>
          <g id="hours">
            <g id="Group 4">
              <path
                id="Line 1_13"
                d="M499.56 210.56V268.56"
                stroke="#474747"
                strokeWidth={stroke2}
                strokeLinecap="round"
              />
              <path
                id="Line 3_13"
                d="M730.56 499.56H788.56"
                stroke="#474747"
                strokeWidth={stroke2}
                strokeLinecap="round"
              />
              <path
                id="Line 4_5"
                d="M210.56 499.56H268.56"
                stroke="#474747"
                strokeWidth={stroke2}
                strokeLinecap="round"
              />
            </g>
            <g id="Group 17">
              <g id="Group 2">
                <path
                  id="Line 5"
                  d="M355.06 249.279L384.06 299.508"
                  stroke="#474747"
                  strokeWidth={stroke2}
                  strokeLinecap="round"
                />
                <path
                  id="Line 6"
                  d="M699.611 384.06L749.841 355.06"
                  stroke="#474747"
                  strokeWidth={stroke2}
                  strokeLinecap="round"
                />
                <path
                  id="Line 7"
                  d="M249.278 644.06L299.508 615.06"
                  stroke="#474747"
                  strokeWidth={stroke2}
                  strokeLinecap="round"
                />
              </g>
              <g id="Group 3">
                <path
                  id="Line 5_2"
                  d="M249.278 355.06L299.508 384.06"
                  stroke="#474747"
                  strokeWidth={stroke2}
                  strokeLinecap="round"
                />
                <path
                  id="Line 6_2"
                  d="M615.06 299.508L644.06 249.278"
                  stroke="#474747"
                  strokeWidth={stroke2}
                  strokeLinecap="round"
                />
                <path
                  id="Line 8"
                  d="M699.611 615.06L749.841 644.06"
                  stroke="#474747"
                  strokeWidth={stroke2}
                  strokeLinecap="round"
                />
              </g>
            </g>
          </g>
        </g>

        <path
          id="minute-hand"
          d="M500 500V320"
          stroke="white"
          strokeWidth={stroke2}
          strokeLinecap="round"
          className={`origin-center ${
            disableRealClock ? "animate-spin-slow-2" : ""
          }`}
        />
        <path
          id="second-hand"
          d="M500 500V320"
          stroke="#AD2D2D"
          strokeWidth={stroke1}
          strokeLinecap="round"
          className={`origin-center ${
            disableRealClock ? "animate-spin-slow-1" : ""
          }`}
        />
        <path
          id="hour-hand"
          d="M500 500V380"
          stroke="white"
          strokeWidth={stroke2}
          strokeLinecap="round"
          className={`origin-center ${
            disableRealClock ? "animate-spin-slow-3" : ""
          }`}
        />
        <circle id="pin" cx="500.5" cy="500.5" r="7.5" fill="white" />
      </g>
    </svg>
  );
}
