$(function(){


    // 랭킹 플랫폼 오토 전환
<<<<<<< HEAD
    platformArr = ['넷플릭스','웨이브','티빙'];


    let i = 0;
    setInterval(() => {
        console.log(i);
        if(i > platformArr.length-1){
            i = 0;
        }
        headlineEl = `오늘의 '${platformArr[i]}' 랭킹`;
        $('.sc-ranking .headline').html(headlineEl);

        rank(i);

        i++; //계속 증가된다.
    }, 4000); //4초 뒤에 실행

    rank(0); //최초 1회 실행은 해야함, 0번이 나와줘야 함
=======
    platformArr = ['넷플릭스','웨이브','티빙'];  //배열을 만든다 (배열의 길이는 3)


    let i = 0;  //변수 생성, i=0이라고 셋팅한 것. 그럼 당연히 0번째인 넷플릭스가 실행될 것
    setInterval(() => {  //일정시간 뒤에 실행 : setTimeout, 일정시간 뒤에 계속 실행 : setInterval
        console.log(i);
        if(i > platformArr.length-1){  //플랫폼변수의 길이에서 -1을 뺀 값(=2)보다 i가 크다면, 
            i = 0;  //i는 0이 된다. = 무한개의 배열이 없어도 다시 0으로 돌아가 반복실행 된다.
        }
        headlineEl = `오늘의 '${platformArr[i]}' 랭킹`;  //변수 생성 (${변수명[i(순서))]} => 변수처리 할 영역)
        $('.sc-ranking .headline').html(headlineEl);  //headline 부분을 재구성한다. 

        rank(i);  //rank라는 함수 만들고, (i)를 뿌린다는 뜻

        i++;  //계속 증가된다.
    }, 4000);  //4초 뒤에 실행

    rank(0);  //최초 1회 실행은 해야함, 0번이 나와줘야 함
>>>>>>> 687596e (이미지 링크 수정)


    function rank(num){
        fetch('./assets/data/rankData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;
            result = allData.filter(function(parm){
<<<<<<< HEAD
                return parm.platform == num;
            })

            let html='';
            let rank = 1;

            result.forEach(element => {
=======
                return parm.platform == num;  //플랫폼이 num인 것
            })

            let html='';
            let rank = 1;  //rank는 1이라는 변수 생성 (랭킹 1~3위 영역). 당연히 1부터 내용이 들어가겠지

            result.forEach(element => {  //result, 값을 써야지 allData를 쓰면 안됨
>>>>>>> 687596e (이미지 링크 수정)

                //순위 변동 표시를 위한 if문
                if(element.change > 0){
                    changeEl = `<span class="num up">${element.change}</span>`  //순위가 0보다 크면(up)
                }else if(element.change < 0){
<<<<<<< HEAD
                    changeEl = `<span class="num down">${(element.change)*-1}</span>`  //순위가 0보다 작으면(down)
=======
                    changeEl = `<span class="num down">${(element.change)*-1}</span>`  //순위가 0보다 작으면(down), *-1 = 곱하기 마이너스1 = 음수x음수=양수
>>>>>>> 687596e (이미지 링크 수정)
                }else{
                    changeEl = `<span class="num">-</span>`
                }

                html+=`<li class="rank-item">
                        <a href="" class="item-wrapper">
                        <img src="${element.thumb}" alt class="poster">
                        <div class="text-box">
                        <img src="./assets/img/ic-rank-${rank}.svg" alt="${rank}위" class="ic-ranknum">
                        <span class="title">${element.title}</span>
                        </div>
                        <div class="updown-box">
                        ${changeEl}
                        </div>
                        </a>
                        </li>`;
            rank++;  //forEach가 끝날때쯤 rank를 증가시킨다
            });

            $('#rankList').html(html)
        })
<<<<<<< HEAD
    };
=======
    }

>>>>>>> 687596e (이미지 링크 수정)




    // 1 - 오늘 이거 볼까요
    // 2 - 카노회원들이 보고있어요
    // 3 - 3월 넷플릭스 종료 에정작

    list('#list1',1);
    list('#list2',2);
    list('#list3',3);

    function list(frame,sorNum){
        fetch('./assets/data/videoData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;

            result = allData.filter(function(parm){
                return parm.sort.indexOf(sorNum) >= 0;
            })
    
            let html='';
    
            result.forEach(element => {

<<<<<<< HEAD
                if(element.recommRate >= 95){ //평점이 95점 이상이면
                    recommRateEl = `<i class="ic-light king"></i>
                                    <strong class="rate green">${element.recommRate}</strong>
                                    <span class="percent green">%</span>` 
                }else if(element.recommRate < 95 && element.recommRate > 40){ //평점이 41 ~ 94점이면
                    recommRateEl = `<i class="ic-light green"></i>
                                    <strong class="rate green">${element.recommRate}</strong>
                                    <span class="percent green">%</span>` 
                }else{ //평점이 40점 이하면
=======
                if(element.recommRate >= 95){  //평점이 95점 이상이면
                    recommRateEl = `<i class="ic-light king"></i>
                                    <strong class="rate green">${element.recommRate}</strong>
                                    <span class="percent green">%</span>` 
                }else if(element.recommRate < 95 && element.recommRate > 40){  //평점이 95점 이하, 40점 이상이면
                    recommRateEl = `<i class="ic-light green"></i>
                                    <strong class="rate green">${element.recommRate}</strong>
                                    <span class="percent green">%</span>` 
                }else{  //평점이 40점 이하면
>>>>>>> 687596e (이미지 링크 수정)
                    recommRateEl = `<i class="ic-light red"></i>
                                    <strong class="rate red">${element.recommRate}</strong>
                                    <span class="percent red">%</span>`
                };

<<<<<<< HEAD
                if(element.genre === true){ //장르가 true면 TV뱃지 표시
=======
                if(element.genre === true){  //장르가 true면 TV 뱃지 표시
>>>>>>> 687596e (이미지 링크 수정)
                    html+=`<div class="swiper-slide">
                            <a href="" class="img-area">
                            <img src="${element.thumb}" alt="${element.title}" class="poster">
                            <span class="badge">TV</span>
                            </a>
                            <div class="text-area">
                            <span class="title">${element.title}</span>
                            <div class="desc-box">
                            ${recommRateEl}
                            <button class="btn-more"> <span class="blind">더보기</span> </button> </div> </div> </div>`;
<<<<<<< HEAD
                }else{ //장르가 false면 TV뱃지 표시 안함
=======
                }else{  //장르가 false면 TV 뱃지 표시 안함
>>>>>>> 687596e (이미지 링크 수정)
                    html+=`<div class="swiper-slide">
                            <a href="" class="img-area">
                            <img src="${element.thumb}" alt="${element.title}" class="poster">
                            </a>
                            <div class="text-area">
                            <span class="title">${element.title}</span>
                            <div class="desc-box">
                            ${recommRateEl}
                            <button class="btn-more"> <span class="blind">더보기</span> </button> </div> </div> </div>`;
                };

            });
            $(frame).html(html);
        })
    };



<<<<<<< HEAD

    // 4 - 볼까말까 고민된다면

=======
    // 4 - 볼까발까 고민된다면
>>>>>>> 687596e (이미지 링크 수정)
    recomm('#recomm1',4);

    function recomm(frame,sorNum){
        fetch('./assets/data/recommData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;

            result = allData.filter(function(parm){
                return parm.sort.indexOf(sorNum) >= 0;
            })
    
            let html='';
    
            result.forEach(element => {
                html+=`<a href="" class="swiper-slide">
                        <div class="img-area">
                        <img src="${element.thumb}" alt>
                        </div>
                        <div class="text-area">
                        <div class="title-box">
                        <span class="platform">
                            <svg width="36" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" data-v-30b216d4="" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M6.212 2.571h-1.38l-.005 2.504-.004 2.503c-.277-.86-.554-1.586-.83-2.31-.318-.83-.635-1.662-.953-2.697H1.714v8.865c.37-.053.763-.104 1.141-.154l.234-.03a7074.952 7074.952 0 01.004-4.845c.616 1.824.995 2.9 1.61 4.633l.495-.059c.335-.04.678-.081.999-.114l.015-8.296zm5.157 0H7.544v.013l-.015 8.166c1.28-.117 2.56-.213 3.842-.288l.002-1.37c-.814.05-1.593.103-2.403.157l-.058.004.001-.55.003-1.522c.3-.005.608-.005.917-.006.318 0 .637 0 .951-.006l.002-1.376c-.298.005-.604.008-.91.011-.324.003-.647.007-.958.013l.004-1.869c.38-.004.754-.005 1.126-.005h.391c.31 0 .623 0 .94-.003 0-.198-.003-.44-.005-.683v-.001c-.003-.243-.005-.486-.005-.685zm.897.007h4.26l-.001.678v.68h-.043c-.463 0-.94.002-1.401.004l-.007 6.367c-.45.01-.933.025-1.384.042l.005-3.188v-.015l.004-3.2h-.142c-.148 0-.296 0-.444-.002l-.111-.001c-.185-.002-.37-.004-.555-.004h-.183l.002-1.075v-.286zm8.996-.007H17.42v3.846l-.001 3.852a111.193 111.193 0 011.368.003V8.686L18.786 7.1h.228l.542-.001h.183l.364-.002c.186 0 .372.001.553.004v-.68l-.001-.682a56.332 56.332 0 00-1.092 0h-.192l-.374.001h-.212v-.898-.897h1.359c.372 0 .743 0 1.117.002V2.571zm.894 3.892c.002-1.295.004-2.59.003-3.885h1.38c.002 1.127 0 2.201-.002 3.277-.002 1.04-.005 2.081-.003 3.172.581.024 1.18.061 1.768.097l.593.036.003 1.37a119.438 119.438 0 00-3.745-.18c-.002-1.296 0-2.591.003-3.887zm4.875-3.885l.016 8.037c.45.035.915.073 1.365.113v-1.55c.002-2.2.004-4.4 0-6.6H27.03zm3.62 2.696c-.35-.915-.693-1.806-1.056-2.696h1.509l.136.353c.264.683.47 1.216.756 1.98.166-.397.31-.734.455-1.071.167-.39.334-.78.534-1.262h1.508c-.32.77-.639 1.505-.953 2.233-.28.646-.557 1.287-.831 1.942a244.55 244.55 0 011.805 4.682 88.861 88.861 0 00-.15-.021c-.455-.065-1.003-.144-1.435-.2a45.879 45.879 0 00-.557-1.46c-.146-.372-.294-.745-.447-1.16-.187.474-.365.883-.544 1.295-.151.35-.304.7-.462 1.092-.198-.022-.398-.047-.599-.072-.29-.036-.58-.072-.865-.1a299.497 299.497 0 001.759-4.08c-.193-.493-.379-.977-.562-1.455z" fill="#ED2517" data-v-30b216d4=""></path></svg>
                        </span>
                        <span class="title">${element.title}</span>
                        </div>
                        <p class="text">${element.desc}</p>
                        <span class="desc">
                        <svg width="81" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-30b216d4="" class=""><path d="M10.623 3.122H2.279v1.162h6.916c0 1.036-.126 2.352-.336 3.178H.837V8.61H5.75v1.764c-2.324.154-3.612 1.064-3.612 2.352 0 1.4 1.568 2.38 4.34 2.38 2.786 0 4.34-.98 4.34-2.38 0-1.288-1.302-2.198-3.64-2.352V8.61h4.928V7.462H10.23c.252-1.12.392-2.548.392-4.34zm-1.288 9.604c0 .798-1.106 1.232-2.87 1.232-1.75 0-2.856-.434-2.856-1.232s1.106-1.232 2.856-1.232c1.764 0 2.87.434 2.87 1.232zM22.678 14.952v-4.578h-8.386v4.578h8.386zm-.042-11.788h-8.344v1.148h6.916c-.014.98-.14 2.492-.336 3.346H12.85V8.82h11.27V7.658h-1.876c.266-1.218.392-2.828.392-4.494zm-1.386 10.64h-5.53v-2.31h5.53v2.31zM31.387 9.968c0-1.526-1.19-2.66-2.968-2.66-1.792 0-2.996 1.176-2.996 2.66 0 1.54 1.204 2.66 2.996 2.66 1.778 0 2.968-1.162 2.968-2.66zm-1.414 0c0 .868-.588 1.484-1.554 1.484-.91 0-1.554-.616-1.554-1.484 0-.882.644-1.484 1.554-1.484.896 0 1.554.602 1.554 1.484zm2.044-3.262V5.544h-7.252v1.162h7.252zm-5.488-2.17h3.78V3.36h-3.78v1.176zm8.022-1.904H33.11v12.474h1.442V8.96h1.932V7.756h-1.932V2.632zM48.427 8.61V7.406H46.55V2.632h-1.428v12.474h1.428V8.61h1.876zm-4.466 1.848c-1.596.336-3.626.42-5.166.392V4.97h4.256V3.794h-5.67v8.26h1.316c2.086 0 4.088-.14 5.446-.42l-.182-1.176zM55.778 5.782h1.946v1.582h-1.946V8.54h1.946v3.136h1.428V2.632h-1.428V4.62h-1.946v1.162zm3.64 8.96v-1.148H52.46v-2.702h-1.442v3.85h8.4zm-4.284-5.264V3.71h-5.698v5.768h5.698zm-1.442-1.106h-2.828V4.83h2.828v3.542z" fill="#98A4B7" data-v-30b216d4=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.506 4.006a.875.875 0 011.238 0l4.375 4.375a.875.875 0 010 1.238l-4.375 4.375a.875.875 0 11-1.238-1.238L73.263 9l-3.757-3.756a.875.875 0 010-1.238z" fill="#ADB5BD" data-v-30b216d4=""></path></svg>
                        </span>
                        </div>
                        </a>`;
            });
            $(frame).html(html);
        })
    }



<<<<<<< HEAD

    // 5 - 최신 리뷰 한줄평

=======
    // 5 - 최신 리뷰 한줄평
>>>>>>> 687596e (이미지 링크 수정)
    review('#review1',5);

    function review(frame,sorNum){
        fetch('./assets/data/reviewData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;

            result = allData.filter(function(parm){
                return parm.sort.indexOf(sorNum) >= 0;
            })
    
            let html='';
    
            result.forEach(element => {

<<<<<<< HEAD
                if(element.rate >= 3.5){ //평점이 3.5점 이상이면
                    rateEl = `<i class="ic-light green"><span class="blind">${element.rate}</span></i>`
                }else if(element.rate < 3.5 && element.rate > 1.5){  //평점이 3.4 ~ 1.6점이면
                    rateEl = `<i class="ic-light grey"><span class="blind">${element.rate}</span></i>`
                }else{  //평점이 ~1.5점이면
=======
                if(element.rate >= 3.5){  //평점이 3.5점 이상이면
                    rateEl = `<i class="ic-light green"><span class="blind">${element.rate}</span></i>`
                }else if(element.rate < 3.5 && element.rate > 1.5){  //평점이 3.4 ~ 1.5점이면
                    rateEl = `<i class="ic-light grey"><span class="blind">${element.rate}</span></i>`
                }else{  //평점이 ~1.4점이면
>>>>>>> 687596e (이미지 링크 수정)
                    rateEl = `<i class="ic-light red"><span class="blind">${element.rate}</span></i>`
                };
                
                html+=`<a href="" class="swiper-slide">
                        <em class="title">${element.vedio}</em>
                        <title class="text">${element.title}</title>
                        <div class="writer">
                        ${rateEl}
                        <span class="user">${element.writer}</span>
                        <span class="desc">님의 평가</span>
                        </div>
                        </a>`;
            });
            $(frame).html(html);
        })
    };



<<<<<<< HEAD

    // 6 - 커뮤니티 인기글

=======
    // 6 - 커뮤니티 인기글
>>>>>>> 687596e (이미지 링크 수정)
    board('#board1',6);

    function board(frame,sorNum){
        fetch('./assets/data/boardData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;

            result = allData.filter(function(parm){
                return parm.sort.indexOf(sorNum) >= 0;
            })
    
            let html='';
    
            result.forEach(element => {
                if(element.admin === true){
                    html+=`<a href="" class="swiper-slide">
                            <div class="text">${element.title}</div>
                            <div class="writer">
                            <span class="user-name">${element.writer}</span>
                            <span class="badge">운영자</span>
                            </div>
                            </a>`;
                }else{
                    html+=`<a href="" class="swiper-slide">
                            <div class="text">${element.title}</div>
                            <div class="writer">
                            <span class="user-name">${element.writer}</span>
                            </div>
                            </a>`;
                }
            });
            $(frame).html(html);
        })
    };

    



<<<<<<< HEAD
=======


>>>>>>> 687596e (이미지 링크 수정)
    // 슬라이드
    const cardSlide = new Swiper(".card-slide", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {  
            nextEl: '.swiper-btn.next',
            prevEl: '.swiper-btn.prev',
        }
    });


    const viewSlide = new Swiper(".view-slide", {
        slidesPerView: 'auto',
    });


    const thumbSlide = new Swiper(".thumb-slide", {
        slidesPerView: 'auto',
        spaceBetween: 10,
    });


    const articleSlide = new Swiper(".article-slide", {
        slidesPerView: 'auto',
        spaceBetween: 16,
    });




<<<<<<< HEAD
=======

>>>>>>> 687596e (이미지 링크 수정)
    // 툴팁 닫기
    $('header .tooltip .ic-close').click(function(){
        $('header .tooltip').addClass('on')
    });

<<<<<<< HEAD
=======

>>>>>>> 687596e (이미지 링크 수정)
    $('.sc-recomm .tooltip .ic-close').click(function(){
        $('.sc-recomm .tooltip').addClass('on')
    });




<<<<<<< HEAD
=======

>>>>>>> 687596e (이미지 링크 수정)
    // 하단 메뉴 클릭 활성화
    $('.sc-bottom-nav .nav-list').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).siblings('.nav-list').removeClass('active')
        } else {
            $(this).addClass('active');
            $(this).siblings('.nav-list').removeClass('active')
            
        }
    });




<<<<<<< HEAD
    // 스크롤 헤더
=======
    // 헤더 숨김/나타남
>>>>>>> 687596e (이미지 링크 수정)
    let scrollTop = 0;
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
  
        if(curr > 180){
            if (curr > scrollTop) {
                $('.header').addClass('on');
                // $('.header .tooltip').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
            scrollTop = curr;
        } else {
            $('.header').removeClass('on');
            // $('.header .tooltip').removeClass('on');

        }
    });



<<<<<<< HEAD
=======

>>>>>>> 687596e (이미지 링크 수정)
}) //삭제금지