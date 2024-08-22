// information-section 데이터 예시
const noticeDataList = [
    {title: "2024.08월 산업기계 공개매각 실시 공고", date: "2024-08-24"},
    {title: "NH멤버스 시스템 점검으로 인한 서비스 일시 중단 안내", date: "2024-07-15"},
    {title: "티몬 · 위메프 거래대금 정산지연 피해 고객님을 위한 금융지원 서비스 안내", date: "2024-08-07"},

];
const newsDataList = [
    {title: "NH농협캐피탈, 가족친화 우수기업 인증", date: "2023-12-27"},
    {title: "NH농협캐피탈, 자매결연마을 일손돕기 실시", date: "2023-11-02"},
    {title: "NH농협캐피탈, 자매결연마을 농산물 직거래장터 개최", date: "2023-11-24"},

];

// 데이터 최신순 정렬
const sortDate = (dataList) => {
    const sortedList = dataList.sort( (a,b)=>{
            return new Date(a.date).getTime() - new Date(b.date).getTime();});
    return sortedList.reverse();
};

// 공지사항 데이터 추가
const sortedNotice = sortDate(noticeDataList);
const noticeListEle = document.getElementById("notification-data");

sortedNotice.forEach( (data) => {
    const noticeList = document.createElement('li');    
    const noticeTit = document.createElement('p');    
    const noticeDate = document.createElement('span');
    
    noticeTit.textContent = data.title;
    noticeTit.className = "notice-tit";

    noticeDate.textContent = data.date;
    noticeDate.className = "notice-date";

    noticeList.appendChild(noticeTit);
    noticeList.appendChild(noticeDate);

    noticeListEle.appendChild(noticeList)
});

// 뉴스 데이터 추가
const sortedNews = sortDate(newsDataList);
const newsDataEle = document.getElementById("news-data");

sortedNews.forEach( (data) => {
    const noticeList = document.createElement('li');    
    const noticeTit = document.createElement('p');    
    const noticeDate = document.createElement('span');
    
    noticeTit.textContent = data.title;
    noticeTit.className = "notice-tit";

    noticeDate.textContent = data.date;
    noticeDate.className = "notice-date";

    noticeList.appendChild(noticeTit);
    noticeList.appendChild(noticeDate);

    newsDataEle.appendChild(noticeList)
});
