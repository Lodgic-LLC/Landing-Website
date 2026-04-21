'use client'

import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f6f7fc] via-[#f0f4ff] to-[#e8f0ff] pt-24 md:pt-36 overflow-hidden relative">
      {/* Décor de fond subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#dbe7ff] via-[#c8d9ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#eaf2ff] via-[#d4e6ff] to-transparent blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,255,0,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left column - content */}
          <div className="lg:col-span-6 xl:col-span-5 pt-10 pb-16 lg:pb-24">
            <h1 className="font-sofia-bold heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-6">
              Agence de dév
            </h1>

            <h2 className="font-sofia-bold text-[#0EA5E9] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              à Toulouse
            </h2>

            <p className="lead text-lg sm:text-xl max-w-2xl mb-8">
              Agence de développement logiciel basée à Toulouse, Lodgic accompagne les porteurs de projets
              et les entreprises dans la création d'applications web et mobiles sur-mesure — conseil, 
              ingénierie et suivi opérationnel.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-3">
                Nous contacter
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center text-[#001F45] font-sofia-bold border border-[#001F45]/10 rounded-md px-5 py-3 hover:border-[#001F45]/30 hover:bg-[#001F45]/5 transition-smooth"
              >
                Nos expertises
              </Link>
            </div>
          </div>

          {/* Right column - Toulouse SVG Map */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 justify-center items-center relative h-full min-h-[500px] w-full">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Blur decorators to give a tech vibe */}
              <div className="absolute top-10 right-10 w-72 h-72 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#DBFF00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>

              <div className="relative w-full h-full flex items-center justify-center p-4">
                <svg 
                  viewBox="0 0 500 500" 
                  className="w-full h-full drop-shadow-xl"
                  style={{ filter: "drop-shadow(0px 10px 25px rgba(0,31,69,0.08))" }}
                >
                  <g fill="white" stroke="#001F45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <motion.path 
                      key={0}
                      d="M 149.40609,389.42567 L 138.35655,383.89643 L 146.49422,370.91246 L 137.33934,355.14619 L 152.59749,340.30736 L 145.47701,321.75882 L 164.804,305.99257 L 192.26865,293.93602 L 191.25144,276.31492 L 157.68353,262.40351 L 166.83842,239.21783 L 138.35655,225.30643 L 128.18445,219.74188 L 125.13283,232.72585 L 113.94352,224.37901 L 107.84027,244.7824 L 99.702596,248.49211 L 105.80585,255.01148 L 96.650957,265.1858 L 82.410023,267.96807 L 72.237936,273.53263 L 71.220727,284.66175 L 100.7198,286.5166 L 80.375605,315.26684 L 51.893737,322.68626 L 77.323979,343.08964 L 75.289562,350.50906 L 60.031419,366.27531 L 51.893737,387.60613 L 77.323979,396.8804 L 92.582122,413.57408 L 75.289562,424.7032 L 111.9091,448.8163 L 146.49422,423.77578 L 149.40609,389.42567 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={1}
                      d="M 150.02922,390.09833 L 167.97315,397.02254 L 176.64242,390.68239 L 173.7653,383.7966 C 173.7653,383.7966 184.55444,382.81292 184.55444,381.17343 C 184.55444,379.53396 184.91409,364.12289 184.91409,364.12289 L 192.82612,351.00711 L 175.92156,307.06918 L 167.10824,305.0299 L 164.9786,305.85506 L 145.20082,321.96151 L 153.02862,340.31351 L 137.37301,355.60682 L 146.31909,370.90018 L 137.93215,384.15439 L 150.02922,390.09833 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0.15, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0.15, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={2}
                      d="M 111.93266,448.89615 L 146.03952,424.17194 L 149.67384,389.50704 L 168.40466,397.6635 L 176.79157,391.29126 L 173.99594,383.64461 L 184.89893,381.35061 L 185.1785,364.01817 L 193.28586,351.01883 L 175.87117,307.17795 C 175.87117,307.17795 166.36598,305.90353 167.48423,304.88397 C 168.6025,303.86441 192.1676,294.43351 192.1676,294.43351 L 204.18886,305.13886 L 221.80142,313.2953 L 227.39269,315.84418 L 217.60795,340.82329 L 220.96271,351.52862 L 228.51095,358.41061 L 247.80088,356.11662 L 251.71479,372.93929 L 253.39216,383.64461 L 270.16602,392.31082 L 266.53168,445.07282 C 266.53168,445.07282 252.55347,443.2886 250.87609,442.52394 C 249.19869,441.75926 241.93005,440.48482 241.93005,440.48482 L 234.94093,440.99459 L 227.67226,446.34726 L 193.84498,430.79904 L 188.81282,432.83815 C 188.81282,432.83815 180.14634,449.15104 179.02808,448.64127 C 177.90983,448.13148 171.75941,443.2886 171.75941,443.2886 L 161.97467,451.44505 L 148.27603,456.7977 L 133.17954,471.07147 L 120.3196,461.6406 L 114.44875,463.93458 L 111.09397,456.7977 L 111.93266,448.89615 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0.3, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0.3, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={3}
                      d="M 227.39269,315.58928 L 229.07008,292.90418 L 247.52131,306.1584 L 245.00524,318.90284 L 247.80088,356.11662 L 228.51095,358.6655 L 220.96271,351.27372 C 220.96271,351.27372 217.60795,342.35263 217.60795,340.31351 C 217.60795,338.2744 227.39269,316.09906 227.39269,315.58928 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0.44999999999999996, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0.44999999999999996, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={4}
                      d="M 166.72725,239.37753 L 197.47933,222.04508 L 216.4897,233.51509 L 240.25264,241.92641 L 262.05867,243.96552 L 273.80036,256.96486 L 267.92951,276.08152 L 257.8652,292.13952 L 247.52131,306.41329 L 228.51095,292.64929 L 227.39269,315.07952 L 203.90929,305.39373 L 192.1676,294.9433 L 191.04935,276.08152 L 157.50165,262.57242 L 166.72725,239.37753 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0.6, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0.6, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={5}
                      d="M 197.19976,222.04508 L 183.50112,206.75176 L 174.55506,192.47798 L 170.3616,173.36132 L 163.3725,179.98843 L 141.84604,180.24333 L 141.00736,185.34109 L 145.20082,192.98776 L 134.01825,198.59532 L 114.72832,192.98776 L 99.072708,186.61554 L 95.9975,178.96887 L 103.54576,161.38154 C 103.54576,161.38154 95.9975,160.10708 94.879245,159.85221 C 93.761003,159.59732 83.137553,152.71531 83.137553,152.71531 L 77.266706,163.42065 L 66.363712,170.04775 L 59.09504,171.3222 L 55.460704,178.45911 L 46.235092,181.26288 L 43.998569,199.86975 L 38.407293,206.49686 L 38.127723,217.96687 L 33.654689,225.61352 L 29.181668,232.24064 L 28.902098,237.59331 L 35.332085,239.37753 L 42.880314,246.7693 L 52.665053,252.37685 L 59.933725,257.72952 L 67.202397,260.27841 L 69.998035,265.1213 L 68.879779,270.21909 L 61.05198,276.5913 L 59.37461,280.41462 L 70.836733,283.2184 L 71.954988,273.78752 L 82.298868,268.68974 L 96.277071,265.88596 L 105.78227,254.92575 L 99.911406,248.55352 L 107.73922,244.98508 L 113.61006,224.0842 L 125.07219,233.51509 L 128.42695,219.4962 L 167.00682,240.14219 L 197.19976,222.04508 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0.75, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0.75, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={6}
                      d="M 247.96109,305.78418 L 250.31695,308.45241 L 306.78893,309.98173 L 317.69192,308.19751 L 319.64888,303.86441 L 331.39058,298.25684 L 330.55188,283.2184 L 320.20802,273.27773 L 312.93934,271.74841 L 310.42325,268.17997 L 312.10066,251.61219 L 298.96113,253.90619 L 289.17639,255.18063 L 278.27337,253.90619 L 274.07993,256.96486 L 267.92951,276.5913 L 247.96109,305.78418 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 0.8999999999999999, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 0.8999999999999999, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={7}
                      d="M 262.33821,243.96552 L 272.68209,238.35797 L 279.95076,236.82864 L 314.61673,239.12264 L 324.40148,240.65198 C 324.40148,240.65198 324.12191,235.55419 326.07886,235.29931 C 328.03582,235.04441 339.77749,233.00531 339.77749,233.00531 L 357.39006,229.43686 L 369.41131,231.22108 L 381.153,237.33841 L 366.05654,242.94596 L 358.50831,249.31818 L 347.88486,253.39641 L 338.93881,252.63175 L 341.17533,260.27841 L 340.33664,268.94463 L 329.15407,265.63109 L 323.00365,264.10174 L 322.44451,273.53263 L 319.36933,273.53263 L 312.65977,271.74841 L 310.14371,268.43487 L 311.98453,251.76391 L 288.89682,255.69041 L 278.27337,252.63175 L 274.35948,257.47464 L 262.33821,243.96552 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.05, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.05, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={8}
                      d="M 262.61778,243.71065 L 260.94041,235.80909 L 262.61778,217.45709 L 273.80036,211.59465 L 269.60688,197.83065 L 278.83251,198.59532 L 281.06903,202.41866 L 300.0794,202.41866 L 309.02545,207.26153 L 312.93934,215.92775 L 317.41238,224.59397 L 321.60583,233.00531 L 325.24018,236.57375 L 325.24018,241.16175 L 315.45541,239.12264 L 280.78946,236.57375 L 271.28427,238.10309 L 262.61778,243.71065 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.2, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.2, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={9}
                      d="M 170.92073,172.59666 L 171.75941,166.73421 L 196.0815,168.26353 L 199.9954,165.96953 L 212.57579,161.12664 L 223.19923,161.8913 L 225.71532,157.04843 L 236.05918,173.36132 L 242.20959,172.85154 C 242.20959,172.85154 255.62868,161.63643 259.263,161.38154 C 262.89735,161.12664 269.32731,161.12664 269.32731,161.12664 L 269.08539,197.35324 L 274.63905,212.35931 L 262.61778,217.96687 L 260.66084,235.29931 L 262.61778,243.71065 L 240.25264,242.1813 L 214.25317,232.49553 L 196.36107,221.79019 L 182.66243,205.9871 L 174.83462,191.9682 L 170.92073,172.59666 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.3499999999999999, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.3499999999999999, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={10}
                      d="M 171.60244,166.70184 C 171.60244,166.70184 171.47987,156.53864 171.75941,155.51909 C 172.03898,154.49953 174.55506,141.24532 174.55506,141.24532 L 177.07113,114.73688 L 171.75941,98.169105 L 172.87767,80.072002 L 180.98504,69.621556 L 186.01719,65.03356 L 185.45807,43.877784 L 180.98504,31.898001 L 170.08203,21.702451 L 172.31855,15.585118 L 180.98504,26.800239 L 194.40413,25.780681 L 199.9954,21.702451 L 210.61885,24.506228 L 215.651,32.407793 L 215.09186,40.819111 L 228.51095,41.838669 L 239.9731,45.407107 L 248.36001,50.759792 L 255.62868,52.289115 L 252.83304,32.152897 L 250.31695,22.976904 L 261.21996,22.467126 L 278.55294,17.114455 L 279.67121,27.819797 L 277.71425,40.819111 L 280.23032,54.32823 L 282.18729,67.837337 L 287.21945,81.856222 L 287.21945,93.581108 L 277.15514,92.306655 L 274.91862,134.36331 L 273.24122,143.7942 L 269.32731,161.12664 L 259.54257,161.38154 L 242.20959,172.85154 L 235.22049,173.36132 L 225.71532,157.04843 L 223.4788,162.1462 L 212.57579,161.12664 L 196.36107,168.00865 L 171.60244,166.70184 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.5, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.5, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={11}
                      d="M 288.33768,80.836664 L 294.20855,65.288455 L 314.33717,79.56221 L 324.68104,62.484665 L 331.39058,55.857554 L 332.22928,44.897342 L 348.16443,46.681561 L 358.22874,61.210225 L 357.39006,74.974214 L 355.71265,88.22845 L 367.73391,92.816447 L 365.77697,101.48266 L 373.88433,102.24732 L 380.03475,109.6391 L 384.22821,111.42332 L 383.6691,133.59865 L 362.14264,145.32354 L 341.73445,155.26422 L 327.75624,163.67553 L 313.77803,169.79287 L 300.91808,168.77332 L 288.05813,156.02888 L 294.20855,172.59666 L 288.33768,170.81242 L 269.60688,160.61687 L 274.63905,134.61821 L 276.87557,92.306655 L 288.05813,93.581108 L 288.33768,80.836664 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.65, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.65, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={12}
                      d="M 384.22821,110.65865 L 381.43257,106.07066 L 389.53994,100.20822 L 394.85165,105.56088 L 399.32468,91.796889 L 416.09852,92.306655 L 418.61462,88.993112 L 434.82934,94.090874 L 442.09799,96.639781 L 438.46366,109.12933 L 432.31325,117.03087 L 427.00153,118.81509 L 421.13068,134.36331 L 414.42115,145.06865 L 406.8729,149.14687 L 405.19553,152.71531 L 389.26037,155.77398 L 390.09906,175.14554 L 396.24947,194.51709 L 401.5612,214.39843 L 402.12032,229.18196 L 382.27127,237.59331 L 369.69087,231.98575 L 357.39006,229.18196 L 325.24018,236.31887 L 321.60583,233.76997 L 314.37479,218.61219 L 319.36933,213.63375 L 326.63798,213.12398 L 336.70229,204.96754 L 338.3797,197.57577 L 332.78839,194.51709 L 336.42274,192.2231 L 343.41184,178.71398 L 338.3797,176.41999 L 337.54098,170.81242 L 328.8745,163.42065 L 383.6691,133.59865 L 384.22821,110.65865 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.7999999999999998, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.7999999999999998, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={13}
                      d="M 331.11102,283.2184 L 336.98186,282.19886 L 345.92791,288.57108 L 351.51921,282.96353 L 357.11049,283.72819 L 372.48652,302.58996 L 382.83038,291.37486 L 401.28163,295.45307 L 420.57156,308.45241 L 427.84024,307.43285 L 425.04458,285.25752 L 419.4533,259.00398 L 409.38899,245.49487 L 402.39989,238.10309 L 402.67946,228.4173 L 380.87343,237.59331 L 366.05654,242.69109 L 358.50831,249.31818 L 348.16443,253.90619 L 338.93881,252.63175 L 341.4549,259.51374 L 340.05706,268.43487 L 323.00365,263.33708 L 322.44451,274.04241 L 331.11102,283.2184 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 1.95, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 1.95, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={14}
                      d="M 428.11978,307.68774 L 434.2702,317.3735 L 446.29146,322.98107 L 457.19446,326.8044 L 470.89312,335.21574 L 478.72092,337.25484 L 479.5596,357.39106 L 484.31219,362.74373 L 478.44135,368.35129 L 478.44135,379.31151 L 470.89312,388.74238 L 462.22662,397.91837 L 451.04407,408.11394 L 445.45277,413.4666 L 437.90455,416.27037 L 414.42115,415.76061 L 409.38899,419.58394 L 399.32468,416.52527 L 385.34648,411.42751 L 385.34648,403.52594 L 379.47563,398.42817 L 363.26091,382.87995 L 361.58352,361.46927 L 356.27179,342.35263 L 342.8527,338.01951 L 337.26143,330.62774 L 328.03582,335.21574 L 319.64888,324.00063 L 312.93934,317.6284 L 312.93934,310.23663 L 317.69192,308.7073 L 320.48756,303.35462 L 331.11102,298.00196 L 331.11102,283.2184 L 336.42274,282.19886 L 345.64834,288.82595 L 350.96007,283.4733 L 356.55136,284.23796 L 372.20695,302.84485 L 382.55084,291.11997 L 401.28163,295.45307 L 420.85113,308.7073 L 428.11978,308.7073" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 2.1, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 2.1, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={15}
                      d="M 267.09082,445.5826 L 269.04777,447.11193 L 268.20906,454.24882 L 276.87557,453.48416 L 282.7464,461.89548 L 296.72462,465.46393 L 303.71372,471.58126 L 312.93934,477.69858 L 322.16497,483.30614 L 331.94971,487.63925 L 324.40148,476.16926 L 318.53062,464.95414 L 316.29412,463.42482 L 315.73498,455.01349 L 321.8854,450.93525 L 333.90665,451.69994 L 333.06796,434.36748 L 342.01402,427.99526 L 350.6805,421.11327 L 357.94917,416.78017 L 366.61567,410.66282 L 368.29305,406.32972 L 378.35736,403.52594 L 381.9917,400.97705 L 363.26091,383.64461 L 361.58352,361.21439 L 356.83092,342.35263 L 342.8527,338.01951 L 338.10012,330.11795 L 327.47667,335.7255 L 318.81019,322.21641 L 313.77803,317.8833 L 312.65977,309.21707 L 306.50936,310.49152 L 250.03741,308.96217 L 248.08044,305.90353 L 244.72567,318.64796 L 247.24174,356.11662 L 253.67173,383.8995 L 270.16602,392.05595 L 267.09082,445.5826 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 2.25, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 2.25, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                    <motion.path 
                      key={16}
                      d="M 269.73437,160.92242 L 287.39839,170.47054 L 294.67883,173.09627 L 288.83061,157.22252 L 300.6464,168.91897 L 313.89442,169.99313 L 329.17141,163.19009 L 337.52601,170.70924 L 338.60018,177.03487 L 343.25489,178.46709 L 336.80991,192.31186 L 332.75195,194.69889 L 338.60018,197.68268 L 336.80991,205.08247 L 326.54568,213.31772 L 319.62329,213.91448 L 313.89442,218.33048 L 309.47841,207.11144 L 300.169,202.45673 L 281.43081,202.81479 L 278.80508,198.39878 C 278.80508,198.39878 269.01826,197.92138 268.77956,197.44397 C 268.54085,196.96657 269.37631,161.28047 269.73437,160.92242 z" 
                      initial={{ pathLength: 0, fillOpacity: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 1 }}
                      transition={{ 
                        duration: 3, 
                        delay: 2.4, 
                        ease: "easeOut",
                        fillOpacity: { delay: 1.5 + 2.4, duration: 1 }
                      }}
                      className="hover:fill-[#0EA5E9]/10 transition-colors duration-500 cursor-pointer"
                    />
                  </g>

                  {/* Pulsing dot for the agency location (adjusted to visually fit the provided SVG shapes) */}
                  <motion.g 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.5, type: "spring" }}
                    className="cursor-pointer"
                  >
                    <circle cx="350" cy="420" r="5" fill="#DBFF00" stroke="#001F45" strokeWidth="2" />
                    <circle cx="350" cy="420" r="5" fill="none" stroke="#DBFF00" strokeWidth="2">
                      <animate attributeName="r" values="5; 18" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1; 0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </motion.g>
                </svg>

                {/* Floating mini-label */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 0.5 }}
                  className="absolute top-[82%] left-[72%] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 pointer-events-none"
                >
                  <div className="w-2 h-2 rounded-full bg-[#DBFF00] shadow-[0_0_8px_rgba(219,255,0,0.8)]" />
                  <span className="font-sofia-bold text-xs text-[#001F45] whitespace-nowrap">Notre Agence</span>
                </motion.div>
              </div>

              {/* Subtle floating arrow indicating scroll down */}
              <div className="absolute -bottom-16 right-1/4 animate-[bounce_2.5s_infinite] z-0 opacity-40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4v14" stroke="#001F45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 12l6 6 6-6" stroke="#001F45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dégradé vers le blanc en bas du hero */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
    </section>
  )
}
