import React from 'react';
import { Typography } from '../common';
import { Container } from './style';

function Privacy() {
  return (
    <Container>
      <div>
        <Typography variant="captionBold">개인정보 수집 및 이용 동의서</Typography>
        <Typography variant="captionRegular">
          &apos;선데이유니크&apos;의 홈페이지 회원 가입을 신청하시는 분께 아래와 같이 개인정보의
          수집/이용목적, 수집하는 개인정보의 항목, 개인정보의 보유 및 이용기간을 안내하여 드리오니
          내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오.
        </Typography>
      </div>
      <div>
        <Typography variant="captionBold">1. 수집하는 개인정보의 항목</Typography>
        <Typography variant="captionRegular">
          &apos;선데이유니크&apos;은(는) 다음의 개인정보 항목을 수집합니다.
          <br />
          <br />
          1. 홈페이지 회원가입 및 관리
          <br />
          수집 정보: 이메일 주소, 닉네임, 비밀번호
          <br />
          2. 민원사무 처리
          <br />
          수집 정보: 이메일 주소
          <br />
          3. 재화 또는 서비스 제공
          <br />
          수집 정보: 이메일 주소, 닉네임, 비밀번호
          <br />
          4. 마케팅 및 광고에의 활용
          <br />
          선택: 이메일 주소
          <br />
          5. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 기록 및 수집될 수
          있습니다.
          <br />
          회원이 Apple, Inc에 등록한 계정과의 연동을 위한 식별자, 회원이 라이엇게임즈코리아
          유한회사(Riot Games Korea, Ltd.)에 등록한 계정과의 연동을 위한 식별자, 접속 IP정보, 쿠키,
          접속로그, 서비스 이용기록, 이용제한 기록 등
        </Typography>
      </div>
      <div>
        <Typography variant="captionBold">2. 개인정보의 수집 및 이용 목적</Typography>
        <Typography variant="captionRegular">
          &apos;선데이유니크&apos;은(는) 개인정보를 다음의 목적을 위해 수집&#183;이용합니다. 수집한
          개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경될 시에는
          사전동의를 구할 예정입니다.
          <br />
          <br />
          1. 홈페이지 회원가입 및 관리
          <br />
          회원 가입의사 확인, 회원자격 유지&#183;관리, 서비스 부정이용 방지, 각종 고지&#183;통지,
          분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 수집&#183;이용합니다. 2. 민원사무 처리
          <br />
          민원인의 신언 확인, 민원사항 확인, 사실조사를 위한 연락&#183;통지, 처리결과 통보 등을
          목적으로 개인정보를 수집&#183;이용합니다.
          <br />
          3. 재화 또는 서비스 제공
          <br />
          서비스 제공, 콘텐츠 제공 등을 목적으로 개인정보를 수집&#183;이용합니다.
          <br />
          4. 마케팅 및 광고에의 활용
          <br />
          신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공,
          인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악
          또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 수집&#183;이용합니다.
        </Typography>
      </div>
      <div>
        <Typography variant="captionBold">3. 개인정보의 보유 및 이용 기간</Typography>
        <Typography variant="captionRegular">
          &apos;선데이유니크&apos;은(는) 법령에 따른 개인정보 보유&#183;이용기간 또는 정보주체로부터
          개인정보를 수집 시에 동의 받은 개인정보 보유&#183;이용기간 내에서 개인정보를 처리,
          보유합니다.
          <br />
          <br />
          각각의 개인정보 보유 및 이용 기간은 다음과 같습니다.
          <br />
          1. 홈페이지 회원가입 및 관리: 홈페이지 탈퇴일로부터 30일이 경과하는 날까지. 다만, 관계
          법령 위반에 따른 수사, 조사 등이 진행중인 경우에는 해당 수사, 조사 종료 시까지.
          <br />
          2. 민원사무 처리: 민원사무 처리 완료 시까지. 단, 민원 발생 후 소송절차가 개시된 경우 해당
          소송절차가 획정적으로 종결되는 날까지.
          <br />
          3. 재화 또는 서비스 제공: 재화-서비스 공급 완료 시까지. 단, 관련 법령에서 소비자 보호 등을
          위하여 필요한 경우 해당 법령에서 정한 기간의 만료일까지.
        </Typography>
      </div>
      <div>
        <Typography variant="captionBold">4. 기타 사항</Typography>
        <Typography variant="captionRegular">
          개인정보 수집 및 이용에 대해서는 거부할 수 있으며, 거부 시에는 회원가입이 불가합니다.
          <br />
          서비스 제공을 위해서 반드시 필요한 최소한의 개인정보이므로 동의를 하셔야 서비스 이용이
          가능합니다. 이 외 서비스 이용과정에서 별도 동의를 통해 추가정보 수집이 있을 수 있습니다.
        </Typography>
      </div>
    </Container>
  );
}

export default Privacy;
