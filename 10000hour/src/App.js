import './component/Style.css'

function App() {
  return (
    <div>
      <header>
        <h1><img src="/image/logo.png" alt="1만 시간의 법칙 로고"></img></h1>
        <h2>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</h2>
      </header>
      <main>
        <p className="info"><strong>1만 시간의 법칙</strong>은<br />어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
        <p className="lang">나는 <input type="text" placeholder="예)프로그래밍" /> 전문가가 될 것이다.</p>
        <p className="hour">그래서 앞으로 매일 하루에 <input type="text" placeholder="예)5시간" /> 시간씩 훈련할 것이다.</p>
        <button type="button" className="btn-result">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        <section className="section-result">
          <div>당신은 <span>프로그래밍</span> 전문가가 되기 위해서</div>
          <div>대략<span>5110</span> 일 이상 훈련하셔야 합니다!</div>
        </section>
        <section className="btn-section">
          <button className="modal">훈련하러 가기 GO!GO!</button>
          <button className="share">공유하기</button>
        </section>
      </main>
      <footer>
        <img src="/image/위니브.png" alt="위니브 로고"></img>
        <p>※본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br />수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
      </footer>
    </div>
  );
}
export default App;
