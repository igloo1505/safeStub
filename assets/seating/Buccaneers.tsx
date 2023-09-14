import { MouseEventHandler, useRef } from "react"
import { SeatingChartProps } from "./props"
import clsx from "clsx"

const SeatingChart = (props: SeatingChartProps) => {
    const ref = useRef<SVGSVGElement>(null!)
    const handleSectionHover: MouseEventHandler<SVGPathElement> = (e) => {
        ref.current.classList.add("focusSection")
        let target = e.target as SVGPathElement
        let id = target.id
        console.log("id: ", id)
    }
    const removeSectionHover: MouseEventHandler<SVGPathElement> = (e) => {
        ref.current.classList.remove("focusSection")
    }

    return (
        <svg width="438" height="495" viewBox="0 0 438 495" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx("stadium-seating-chart", props.className && props.className)} id={props.id} ref={ref}>
            <g id="Group 1">
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section319" d="M11 46.5L1.24187 56.746L30 86L37 79.5L33.5 75.5L36.5 71.5L11 46.5Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section245" d="M424 373L437 361L394 343.5L424 373Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section244" d="M420 377L388 345L375 358L380.5 364L377 367L404 393L420 377Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section243" d="M373 371L376 368.5L403 395L385.5 412.5L353 381L367.5 366L373 371Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section242" d="M384 413.5L353 383L369.5 428.5L384 413.5Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section241" d="M367 429L350 382V390H347V429H367Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section240" d="M343 382H323V429H346V390H343V382Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section239" d="M322 382H302V390H297V429H322V382Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section238" d="M290 382H270V429H296V390H290V382Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section237" d="M269 382H250V390H244V429H269V382Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section236" d="M237 390H243V429H218V382H237V390Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section235" d="M217 429V382H199V390H193V429H217Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section234" d="M186 390V382H167V429H192V390H186Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section233" d="M166 382H146V390H140V429H166V382Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section232" d="M134 390V382H114V429H139V390H134Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section231" d="M113 382H94V390H91V429H113V382Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section230" d="M87 390H90V429H70L86 382H87V390Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section229" d="M84 383L67.5 429L53 414L84 383Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section228" d="M64 371.5L61 368L34.5 394L52 412.5L84 380.5L69.5 366L64 371.5Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section226" d="M13.5 372.5L1.5 360.5L43 344L13.5 372.5Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section227" d="M33 393L17 376.5L49 345L61.5 358.5L56.5 363L60 367L33 393Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section215" d="M113 67H91V106H94V114H113V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section214" d="M139 67H114V114H134V106H139V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section213" d="M166 67H140V106H146V114H166V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section212" d="M192 67H167V114H186V107H187V106H192V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section219" d="M33.5 103L17 121L49 151.5L62 138.5L56.5 133L59.5 129.5L33.5 103Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section218" d="M52.5 85L35 102L60.5 128L64 125L69 130L83 116L52.5 85Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section217" d="M67.5 68L54 84L84 113.5L67.5 68Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section220" d="M14 124L2 136L42 152L14 124Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section143" d="M357.5 357L330 331L349.5 376L366.5 359L361.5 354L357.5 357Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section140" d="M328 332H323V377H348L328 332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section139" d="M322 332H297V377H322V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section138" d="M296 332H270V377H296V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section137" d="M269 332H244V377H269V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section136" d="M243 332H219V377H243V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section135" d="M218 332H194V377H218V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section134" d="M193 332H167V377H193V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section133" d="M166 332H141V377H166V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section132" d="M140 332H114V377H140V332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section131" d="M91 377L110 332H112.5L113 377H91Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section127" d="M98.5 322L54 340L71 358L76 353.5L72.5 349.5L99.5 323L98.5 322Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section128" d="M108 332L107 331L80.5 358L77 354.5L72 359L89 376L108 332Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section144" d="M384.5 340L340 322L339 322.5L366.5 349L362.5 353L367.5 358L384.5 340Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section145" d="M340 321V313H385V339L340 321Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section150" d="M385 184H340V209H385V184Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section149" d="M385 210H340V235H385V210Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section148" d="M385 236H340V260H385V236Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section147" d="M340 286V261H385V286H340Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section146" d="M340 312V287H385V312H340Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section102" d="M362 143.5L367.5 138.5L384 156L340 175L339 173.5L366 148L362 143.5Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section107" d="M322 120H297V164H322V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section118" d="M77 142L73 137.5L90 121L107.5 165.5L80.5 139L77 142Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section120" d="M98 175.5L54 158V183H98V175.5Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section106" d="M348.5 120H323V164H328.5L348.5 120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section103" d="M367 138L350 121L329 164.5L331 166L358 139L361 143L367 138Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section115" d="M113 120H91.5L109 164H113V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section114" d="M140 120H114V164H140V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section113" d="M166 120H141V164H166V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section112" d="M192 120H167V164H192V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section111" d="M218 120H193V164H218V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section110" d="M243 120H219V164H243V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section109" d="M269 120H244V164H269V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section108" d="M296 120H270V164H296V120Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section126" d="M98 313H54V339L98 321V313Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section123" d="M54 261V236H98V261H54Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section122" d="M54 235V210H98V235H54Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section121" d="M54 209V184H98V209H54Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section124" d="M54 286V262H98V286H54Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section125" d="M54 312V287H98V312H54Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section119" d="M72.9205 147.116L99 174L54 156.246L71.8977 139L77.0114 143.058L72.9205 147.116Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section151" d="M385 183V157.5L340 176V183H385Z" fill="#22C55E" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section216" d="M90 67H69L86 114H87V106H90V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Field" d="M118 296V200H322V296H118Z" fill="#6BA245" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section211" d="M217 67H193V106H198V107H199V114H217V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section210" d="M243 67H218V114H237V106H243V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section209" d="M269 67H244V106H249V107H250V114H269V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section208" d="M296 67H270V114H290V106H296V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section207" d="M322 67H297V106H302.024V114H322V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section205" d="M367.088 67H347V106H350V114H351L367.088 67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section204" d="M384 83.5L369.5 68L352 114L353 114.5L384 83.5Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section203" d="M403 102L385 84L353.5 116L367.5 130L372.5 126L377 128L403 102Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section202" d="M420 120L404 103L377 129.5L380 133L375 138.5L388 151L420 120Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section201" d="M436 136.5L424.5 123L394 153L436 136.5Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section206" d="M346 67H323V114H343V106H346V67Z" fill="#9EE374" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section318" d="M28.5 29L12.5 45.5L37.5 70.5L41 67.5L46 72L56.5 62L50.5 56.5L54 53.5L28.5 29Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section317" d="M52.5 2.5L30 28L55 53L59.5 48L65 53L69 48L52.5 2.5Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section316" d="M86 1H54L71 48H80V40H86V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section315" d="M113 1H87V40H93V48H113V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section314" d="M114 48V1H140V40H134V48H114Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section313" d="M166 1H141V40H146V48H166V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section312" d="M192 1H167V48H186V40H192V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section311" d="M218 1H193V40H199V48H218V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section310" d="M242 1H219V48H237V40H242V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section309" d="M269 1H243V40H249V48H269V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section308" d="M270 48V1H296V40H290V48H270Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section307" d="M322 1H297V40H302V48H322V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section306" d="M349 1H323V48H343V40H349V1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section305" d="M383 1H350V40H356V48H367L383 1Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section304" d="M408 25.5L385.5 3L368 49L372.5 53L377.5 48L381.5 52L408 25.5Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section303" d="M426.5 45L409 27L382.5 53L386.5 56.5L381 62L391 72.5L397 67L400 71L426.5 45Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section302" d="M437.5 55.5L427.5 46L401 72L404.5 76L400 79.5L406.5 86L437.5 55.5Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section327" d="M37 417L30.5 410.5L0.5 440L10.5 451L37 425L33 421L37 417Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section328" d="M41 429L37.5 426L12 452L28 469L54 443L51 439.5L56 434.5L46 425L41 429Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section329" d="M59 448.5L55 444L29 470L52.5 494L69 448.5L64.5 444L59 448.5Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section330" d="M80 448H71L54 495H86V456H80V448Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section331" d="M113 448H93V456H87V495H113V448Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section332" d="M114 495V448H134V456.129H140V495H114Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section333" d="M146 456H141V495H166V448H146V456Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section334" d="M186 448H167V495H192V456H186V448Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section335" d="M199 456H193V495H218V448H199V456Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section336" d="M237 448H219V495H242V456H237V448Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section337" d="M249 456H243V495H269V448H249V456Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section338" d="M290 448H270V495H296V456H290V448Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section339" d="M302 456H297V495H322V448H302V456Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section340" d="M343 448H323V495H349V456H343V448Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section341" d="M356 456H350V495H383L366 448H356V456Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section342" d="M372.5 444L368 448L385.5 494L408 472L382 445L377 448.5L372.5 444Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section343" d="M386 440L383 444L409 470L426.5 453L400.5 426L396.5 429.5L391.5 424.5L381 434.5L386 440Z" fill="#DBEEA0" />
                <path onMouseEnter={handleSectionHover} onMouseLeave={removeSectionHover} id="Section344" d="M404 422L401 424.5L428 451.5L438 442L407 410.5L399.5 417L404 422Z" fill="#DBEEA0" />
            </g>
        </svg>
    )
}

SeatingChart.displayName = "Seating Chart"

export default SeatingChart
