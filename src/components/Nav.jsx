export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list nav-list--depth1">

        {/* About */}
        <li className="nav-list__item depth-1">
          <a href="/about/intro" className="link"><span>About</span></a>
          <ul className="nav-list nav-list--depth2">
            <li><a href="/about/intro" className="link">지오스토리</a></li>
            <li><a href="/about/ci" className="link">CI</a></li>
            <li><a href="/about/history" className="link">연혁</a></li>
            <li><a href="/about/business_performance" className="link">주요 사업실적</a></li>
            <li><a href="/about/certificate" className="link">주요 인증현황</a></li>
            <li><a href="/about/management" className="link">경영지침</a></li>
            <li><a href="/about/location" className="link">오시는 길</a></li>
          </ul>
        </li>

        {/* Business */}
        <li className="nav-list__item depth-1">
          <a href="/business/business_1" className="link"><span>Business</span></a>
          <ul className="nav-list nav-list--depth2">
            <li><a href="/business/business_1" className="link">항공사진 촬영</a></li>
            <li><a href="/business/business_12" className="link">정사영상 제작</a></li>
            <li><a href="/business/business_2" className="link">수치표고자료 제작</a></li>
            <li><a href="/business/business_3" className="link">수치지도 제작</a></li>
            <li><a href="/business/business_4" className="link">지하시설물 측량</a></li>
            <li><a href="/business/business_5" className="link">3차원 모델링 제작</a></li>
            <li><a href="/business/business_6" className="link">MMS 측량</a></li>
            <li><a href="/business/business_7" className="link">초분광 영상처리</a></li>
            <li><a href="/business/business_8" className="link">초분광 장비판매/컨설팅</a></li>
            <li><a href="/business/business_9" className="link">항공수심측량</a></li>
            <li><a href="/business/business_10" className="link">R&D</a></li>

            <li className="nav-list__item depth-2">
              <a href="/business/business_11__1" className="link">GIS 솔루션 개발</a>
              <ul className="nav-list nav-list--depth3">
                <li><a href="/business/business_11__1" className="link">Geo3Di</a></li>
                <li><a href="/business/business_11__2" className="link">GeoModeler</a></li>
                <li><a href="/business/business_11__3" className="link">GeoM</a></li>
                <li><a href="/business/business_11__4" className="link">GeoPhoto</a></li>
                <li><a href="/business/business_11__5" className="link">Hyperspectral Analysis</a></li>
                <li><a href="/business/business_11__6" className="link">GeoCadMap</a></li>
                <li><a href="/business/business_11__7" className="link">GeoCadMap MMS</a></li>
                <li><a href="/business/business_11__8" className="link">Geo3D LiDAR</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Equipment */}
        <li className="nav-list__item depth-1">
          <a href="/equipment/equipment" className="link"><span>Equipment</span></a>
        </li>

        {/* News */}
        <li className="nav-list__item depth-1">
          <a href="/news/news" className="link"><span>News</span></a>
          <ul className="nav-list nav-list--depth2">
            <li><a href="/news/news" className="link">News</a></li>
            <li><a href="/news/data" className="link">자료실</a></li>
          </ul>
        </li>

        {/* Recruit */}
        <li className="nav-list__item depth-1">
          <a href="/recruit/talent_recruitment" className="link"><span>Recruit</span></a>
          <ul className="nav-list nav-list--depth2">
            <li><a href="/recruit/talent_recruitment" className="link">인재채용</a></li>
            <li><a href="/recruit/recruitment_announcement" className="link">채용공고</a></li>
          </ul>
        </li>

      </ul>
    </nav>
  );
}
