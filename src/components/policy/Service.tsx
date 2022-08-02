import React from 'react';
import { Typography } from '../common';
import { Container, Ol } from './style';

function Service() {
  return (
    <Container>
      <div>
        <Typography variant="captionBold">이용약관</Typography>
        <Typography variant="captionRegular">본 약관은 2022년 07월 30일부터 적용됩니다.</Typography>
      </div>
      <div>
        <Typography variant="captionBold">목적</Typography>
        <Typography variant="captionRegular">
          본 약관은 선데이큐니크(이하 &quot;회사&quot; 또는 &quot;선데이유니크&quot;)에서 제공하는
          서비스(이하 &quot;서비스&quot;)의 이용과 관련하여, 회사와 회원 간에 서비스 이용에 관한
          권리 및 의무와 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로 합니다. 그리고 회사는
          아래와 같은 서비스를 제공합니다.
        </Typography>
      </div>
      <div>
        <Typography variant="captionBold">용어의 정의</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 서비스: 개인용 컴퓨터 (PC), TV, 휴대형 단말기, 전기통신설비 등을 포함한 각종 유무선
              장치와 같이 구현되는 단말기와 상관없이 회사가 제공하는 서비스를 의미합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회원: 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 모든
              사용자를 의미합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 계정: 회원의 식별 및 서비스 이용을 위하여 회원이 선정하고 회사가 인증한 문자, 숫자
              또는 특수문자의 조합으로 만들어진 식별자(이메일 주소 등)를 의미합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 비밀번호: 회원의 개인 정보 보호 및 회원의 동일성 확인을 위해서 회원이 정한 문자,
              숫자 또는 툭수문자의 조합을 의미합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 계정 정보: 계정, 비밀번호, 닉네임 등 회원이 회사에 제공한 일반정보 및 게임 전적
              정보 등 생성정보를 통칭합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              6. 게시물: 회원이 서비스를 이용함에 있어 회원이 서비스에 게시한 문자, 문서, 그림,
              음성, 동영상, 링크, 파일 혹은 이들의 조합으로 이루어진 정보 등 모든 정보나 자료를
              의미합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              7. 가입신청자: 회사에 대하여 서비스 이용을 신청하였으나 아직 회사로부터 그 서비스
              이용에 관하여 동의를 받지 못한 자를 의미합니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">약관의 게시와 효력, 개정</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 홈페이지나 서비스 초기화면 그
              연결화면에 게시합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 관련법에 위배되지 않는 범위에서 본 약관을 변경할 수 있습니다. 회사가 본
              약관을 개정할 이전(회원에게 불리하거나 중대한 사항의 변경은 30일 이전)부터 그 적용일자
              경과 후 상당한 기간이 경과할 때까지 초기화면 또는 그 연결화면을 통해 공지합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회사가 전항에 따라 개정된 약관을 공지 또는 통지하면서 회원에게 30일 기간 내에
              의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 공지 또는
              통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이 개정된
              약관에 동의한 것으로 봅니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 회원은 변경된 약관에 동의하지 않는 경우 회원 지위에서 탈퇴할 수 있습니다. 회원이
              회사에 대하여 명시적으로 위와 같은 회원탈퇴 의사를 표시할 경우, 회사는 그 탈퇴한
              회원을 상대로 변경된 약관의 적용을 받는 해당 서비스를 더 이상 제공할 수 없습니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">약관의 해석과 예외 준칙</Typography>
        <Typography variant="captionRegular">
          회사는 제공하는 개별 서비스에 대해서 별도의 이용약관 및 정책을 둘 수 있으며, 해당 내용이
          본 약관과 상충할 경우 개별 서비스의 이용약관을 우선하여 적용합니다. 본 약관에 명시되지
          않은 사항이 관계법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
        </Typography>
      </div>
      <div>
        <Typography variant="captionBold">이용계약의 체결</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 이용계약은 회원이 서비스에서 제공하는 회원 가입 페이지에서 서비스 이용약관에 동의한
              후 이용신청을 하고 신청한 내용에 대해서 회사가 승낙함으로써 체결됩니다. 가입신청자는
              제1항의 이용신청 시 본인의 실제 정보를 기재하여야 합니다. 식별정보를 허위로 기재하거나
              타인의 정보를 도용한 경우 본 약관 의한 회원의 권리를 주장할 수 없고, 회사는 환급 없이
              이용계약을 취소하거나 해지할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 이용약관에 동의한 후 가입신청자에 대해서 원칙적으로 접수 순서에 따라 서비스
              이용을 승낙함을 원칙으로 합니다. 다만 회사의 설비에 여우가 없거나 기술적 장애가 있는
              경우, 서비스 상의 장애가 발생한 경우, 그 밖에 이용신청의 승낙이 곤란한 경우 일정시간
              가입승인을 유보할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회사는 다음 각 호에 대당하는 신청에 대해서 승낙하지 않거나 사후에 이용계약을 해지할
              수 있습니다.
            </Typography>
            <Ol>
              <li>
                <Typography variant="captionRegular">
                  a. 가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  b. 제3자의 이메일 주소를 이용하여 신청한 경우
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  c. 허위의 정보를 기재하거나, 회사가 필수적으로 입력을 요청한 부분을 기재하지 않은
                  경우
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  d. 가입신청자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을
                  위반하며 신청하는 경우
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  e. 비정상적인 방법을 통하여 계정을 대량으로 생성하는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  f. 만 14세 미만의 아동이 이용신청을 한 경우
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  g. 최근 3개월 내 이용제한 기록이 있는 이용자가 이용신청을 하는 경우
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  h. 대한민국 이외의 국가 중 회사에서 아직 서비스를 제공할 것으로 결정하지 않은
                  국가에서
                  <br />
                  서비스를 이용하는 경우로 회사가 해외 서비스 업체와 체결한 계약이나 특정 국가에서
                  <br />
                  접속하는 회원에 대한 서비스 제공과 관련하여 서비스제공을 제한할 필요가 있는 경우
                </Typography>
              </li>
            </Ol>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 회원은 회원 가입이나 회원정보 수정을 통해 기재한 개인정보 및 모든 정보의 내용에
              변경이 발생한 경우, 즉시 변경사항을 정정하여 기재하여야 합니다. 변경의 지체로 인하여
              발생한 회원의 손해에 대해 회사는 책임을 지지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 회사는 관련 법률 및 회사의 개인정보처리방침에서 정한 바에 따라 회원에게 요청하는
              회원정보 및 기타정보 항목을 추가, 삭제 등 변경하여 수집 및 이용할 수 있습니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">개인정보보호 의무</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회사는 정보통신망 이용촉진 및 정보보호 등에 관란 법률, 개인정보 보호법 등 관계
              법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및
              사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다. 다만 회사의 공식
              사이트 이외의 링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 서비스를 중단하거나 회원이 개인정보 제공 동의를 철회한 경우에는 신속하게
              회원의 개인정보를 파기합니다. 단, 개인정보처리방침에서 정하는 바에 따라 특정 정보는
              일정 기간 동안 보관할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회원은 계정과 비밀번호에 관해서 관리책임이 있습니다. 회원은 계정 및 비밀번호를
              제3자가 이용하도록 제공하여서는 안됩니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 회사는 회원이 계정 및 비밀번호를 소홀히 관리하여 발생하는 서비스 이용상의 손해 또는
              회사의 고의 또는 중대한 과실이 없는 제3자의 부정이용 등으로 인한 손해에 대해 책임을
              지지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 회원은 계정 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를
              즉시 회사에 통지하고 회사의 안내에 따라야 합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              6. 회사는 정보통신망 이용촉진 및 정보보호에 관한 법률, 통신비밀보호법, 전기통신사업법
              등 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.
            </Typography>
          </li>
        </Ol>
      </div>
    </Container>
  );
}

export default Service;
