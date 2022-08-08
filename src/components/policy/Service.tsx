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
      <div>
        <Typography variant="captionBold">회원의 의무</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회원은 다음 각호에 해당하는 행위를 해서는 안됩니다.
            </Typography>
            <Ol>
              <li>
                <Typography variant="captionRegular">
                  a. 이용 신청 또는 회원정보 변경 시 허위내용 등록
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">b. 타인의 정보 도용</Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  c. 회사의 운영자, 임직원, 회사를 사칭하거나 관련 정보를 도용
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">d. 회사가 게시한 정보의 변경</Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  e. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할
                  가능성이 있는 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을
                  포함하고 있는 자료 등을 게시하거나 타인에게 발송하는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  f. 회사의 사전 허락 없이 자동화된 수단(매크로, 봇, 스파이더, 스크래퍼 등)을
                  이용하여 회원가입을 시도 또는 가입하거나, 서비스를 통해 얻을 수 있는 정보를 수집,
                  가공, 배포하거나, 회사의 서비스 제공 취지에 부합하지 않는 방법으로 서비스를
                  이용하거나, 서비스에 대한 어뷰징 행위를 막기 위한 회사의 조치를 무력화하려는
                  일체의 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  g. 서비스의 운영을 방해하거나 안정적 운영을 방해할 수 있는 컴퓨터 바이러스의 감염
                  자료 등록 또는 유포하는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  h. 회사와 기타 제3자의 저작권, 영업비밀, 특허권 등 지적재산권에 대한 침해
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  i. 회사와 다른 회원 및 기타 제3자를 희롱하거나, 위협하거나 명예를 손상시키거,
                  업무를 방해하는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  j. 외설, 폭력적인 메세지, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  k. 해킹을 통해서 다른 사용자의 정보를 취득하는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  l. 회사의 동의 없이 영리, 영업, 광고, 정치활동 등을 목적으로 서비스를 사용하는
                  행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  m. 기타 현행 법령에 위반되는 불법적인 행위 및 선량한 풍속 기타 사회통념상 허용되지
                  않는 행위
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  n. 회사는 회원이 전항에서 금지한 행위를 하는 경우, 위반 행위의 경중에 따라
                  서비스의 이용정지/계약의 해지 등 서비스 이용 제한, 수사 기관에의 고발 조치 등
                  합당한 조치를 취할 수 있습니다.
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  o. 회원은 회사의 명시적 사전 동의가 없는 한 서비스의 이용권한 및 기타 이용계약상의
                  지위를 제3자에게 양도, 증여, 대여할 수 없으며 이를 담보로 제공할 수 없습니다.
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  p. 회원은 관계법, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항,
                  회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를
                  하여서는 안됩니다.
                </Typography>
              </li>
              <li>
                <Typography variant="captionRegular">
                  q. 회사는 회원이 게시하거나 등록하는 서비스 내의 게시물, 게시 내용이 제1항에서
                  규정하는 금지행위에 해당된다고 판단되는 경우, 사전통지 없이 이를 삭제하거나 이동
                  또는 등록을 거부할 수 있습니다.
                </Typography>
              </li>
            </Ol>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">게시물의 삭제 또는 이용 제한</Typography>
        <Typography variant="captionRegular">
          회원의 게시물의 내용이 다음 각 호에 해당하는 경우 회사는 해당 게시물을 삭제 또는 해당
          회원의 회원 자격을 제한, 정지 또는 상실 시킬 수 있습니다.
        </Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 다른 회원 또는 제3자를 비방하거나 중상 모략으로 명예를 손상시키는 내용
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 음란물, 욕설 등 공서양속에 위반되는 내용의 정보, 문장, 도형 등을 유포하는 내용
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 범죄행위와 관련이 있다고 판단되는 내용
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 다른 회원 또는 제3자의 저작권 등 기타 권리를 침해하는 내용
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 종교적, 정치적 분쟁을 야기하는 내용으로서, 이러한 분쟁으로 인하여 회사의 업무가
              방해되거나 방해되리라고 판단되는 경우
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              6. 타인의 개인정보, 사생활을 침해하거나 명예를 손상시키는 경우
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              7. 동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에 어긋나는 경우
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              8. 불필요하거나 승인되지 않은 광고, 판촉물을 게재하는 경우
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              9. 회원의 게시물로 인한 법률상 이익 침해를 근거로, 다른 회원 또는 제3자가 회원 또는
              회사를 대상으로 하여 민형사상의 법적 조치(예: 고소, 가처분신청, 손해배상청구소송)를
              취하는 동시에 법적 조치와 관련된 게시물의 삭제를 요청해오는 경우, 회사는 동 법적
              조치의 결과(예: 검찰의 기소, 법원의 가처분결정, 손해배상판결)가 있을 때까지 관련
              게시물에 대한 접근을 잠정적으로 제한하거나 수정, 삭제 권한을 임시로 제한할 수
              있습니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">이용의 제한</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회사가 본 약관&apos;회원의 의무&apos;의 위반 행위를 조사하는 과정에서 당해 계정이
              특정 위반행위에 직/간접적으로 관련되어 있는 경우 등 다른 회원의 권익 보호 및 서비스의
              질서유지를 위해 불가피할 경우에는 해당 계정의 이용을 일시적으로 정지할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 회원이 본 약관 &apos;회원의 의무를 위반한 경우 및 서비스의 정상적인 운영을
              방해한 경우에는 사전 통보 후 회원 자격을 제한, 이용계약을 해지하거나 또는 기간을
              정하여 서비스의 이용을 중지할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회사는 전항에도 불구하고, 저작권법을 위반한 불법프로그램의 제공 및 운영방해,
              정보통신망 이용촉진 및 정보보호 등에 관한 법률을 위반한 불법통신 및 해킹,
              악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시
              영구이용정지를 할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 회사는 회원이 계속해서 1년 이상 로그인하지 않는 경우, 회원정보의 보호 및 운영의
              효율성을 위해 이용을 제한할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 회원이 본 조에 따른 회사의 이용제한에 불복하고자 할 때에는 통보를 받은 날로부터
              15일 이내에 회사의 이용제한에 불복하는 이유를 기재한 이의신청서를 서면, 이메일 또는
              이에 준하는 방법으로 회사에 제출하여야 합니다. 이의신청서를 접수한 회사는 접수한
              날로부터 15일 이내에 회원의 불복 이유에 대하여 서면, 이메일 또는 이에 준하는 방법으로
              답변하고 답변 내용에 따라 상응하는 조치를 취하여야 합니다. 다만, 회사는 15일 이내에
              답변이 곤란한 경우 회원에게 그 사유와 처리일정을 통보하여야 합니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">권리와 책임</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회원이 서비스 내에 작성한 게시물에 대한 책임 및 권리는 게시물을 등록한 회원에게
              있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 회원이 작성한 게시물에 대해서 감시 및 관리할 수 없으며 이에 대해서 책임지지
              않습니다.
              <br />
              회사는 회원이 등록하는 게시물의 신뢰성, 진실성, 정확성 등에 대해서 책임지지 않으며
              보증하지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회사는 회원과 별도로 서면 계약을 체결하여 게임 전적 서비스 및 제반 서비스의 브랜드
              특성을 이용할 수 있는 명시적인 권리를 부여하지 아니하는 한, 회원에게 회사 또는
              서비스의 상호, 상표, 서비스표, 로고, 도메인 네임 및 기타 식별력 있는 브랜드 특성을
              이용할 수 있는 권리를 부여하지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 서비스에 대한 저작권 및 지적재산권, 회사가 작성한 게시물의 저작권은 회사에
              귀속됩니다. 단, 회원이 단독 또는 공동으로 작성한 게시물 및 제휴계약에 따라 제공된
              저작물 등은 제외합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 회원의 게시물 또는 저작물이 회사 또는 3자의 저작권 등 지적재산권을 침해함으로써
              발생하는 민&#183;형사상의 책임은 전적으로 회원이 부담하여야 합니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">게시물의 관리</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회원의 게시물이 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 저작권법 등
              관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당
              게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련법에 따라 조치를 취하여야
              합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가
              있어나 본 약관 및 기타 회사 정책, 관련법에 위반되는 경우에는 관련법에 따라 해당
              게시물에 대해 임시조치 등을 취할 수 있습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회원이 비공개로 설정한 게시물에 대해서는 회사를 포함한 다른 사람이 열람할 수
              없습니다. 단, 법원, 수사기관이나 기타 행정기관으로부터 정보제공을 요청받은 경우나 기타
              법률에 의해 요구되는 경우에는 회사를 포함한 다른 사람이 해당 게시물을 열람할 수
              있습니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">계약의 해지</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회원은 회사에 언제든지 회원 탈퇴를 요청할 수 있으며, 회사는 이와 같은 요청을 받았을
              경우, 회사가 별도로 고지한 방법에 따라 신속하게 처리합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회원이 회원탈퇴를 한 경우에는 회원이 회사의 서비스에 저장한 게시물 일체에 대한
              수정&#183;삭제 권한을 잃게 됩니다. 그러므로 회원은 서비스 탈퇴 전 회원이 작성 및
              게시한 게시물을 모두 삭제 후 탈퇴하시기 바랍니다. 단, 저작물이 공동 저작을 통해 작성된
              경우에는 공동 저작자의 의사에 따라 회사의 서비스에 해당 게시물이 저장되어 있을 수
              있습니다. 그리고 제3자에 의하여 보관되거나 무단복제 등을 통하여 복제됨으로써 해당
              저작물이 삭제되지 않고 재 게시된 경우, 실제 권리자의 요청에 따라 해당 저작물에 관한
              삭제 등 조치를 취할 것입니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 본 약관 및 관계 법령을 위반한 회원의 경우 다른 회원을 보호하고, 법원, 수사기관 또는
              관련 기관의 요청에 따른 증거자료로 활용하기 위해 회원탈퇴 후에도 관계 법령이 허용하는
              한도에서 회원의 계정정보를 보관할 수 있습니다.
            </Typography>
          </li>
        </Ol>
      </div>
      <div>
        <Typography variant="captionBold">책임제한</Typography>
        <Ol>
          <li>
            <Typography variant="captionRegular">
              1. 회사는 회원의 약관, 서비스 이용 방법 및 이용 기준을 준수하지 않는 등 회원의
              귀책사유 또는 컴퓨터의 오류 등으로 인한 서비스 이용의 장애에 대하여는 책임을 지지
              않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              2. 회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 발생한 분쟁에 대해
              개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              3. 회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을
              지지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              4. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지, 제3자가 제공하는 오픈아이디의
              인증 장애, 해결이 곤란한 기술적 결함 기타 불가항력으로 인하여 서비스를 제공할 수 없는
              경우 책임이 면제됩니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              5. 회사는 사전에 공지된 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로
              서비스가 중지되거나 장애가 발생한 경우에 대해서는 책임이 면제됩니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              6. 회원은 자신의 결정에 의하여 회사의 서비스를 사용하여 특정 프로그램이나 정보 등을
              다운받거나 접근함으로써 입게 되는 컴퓨터 시스템상의 손해나 데이터, 정보의 상실에 대한
              책임을 집니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              7. 회사는 회원의 컴퓨터 환경이나 회사의 관리 범위에 있지 아니한 보안 문제로 인하여
              발생하는 제반 문제 또는 현재의 보안기술 수준으로 방어가 곤란한 네트워크 해킹 등 회사의
              귀책사유 없이 발생하는 문제에 대해서 책임을 지지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              8. 회사는 서비스가 제공한 내용에 대한 중요 정보의 정확성, 내용, 완전성, 적법성, 신회성
              등에 대하여 보증하거나 책임을 지지 않으며, 사이트의 삭제, 저장실패, 잘못된 인도,
              정보에 대한 제공에 대한 궁극적인 책임을 지지 않습니. 또, 회사는 회원이 서비스 내 또는
              웹사이트상에 게시 또는 전송한 정보, 자료, 사실의 신뢰도, 정확, 완결성, 품질 등 내용에
              대해서는 책임을 지지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              9. 회사는 회원이 서비스를 이용하여 기대하는 효용을 얻지 못한 것에 대하여 책임을 지지
              않으며 서비스에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이
              면제됩니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              10. 회사는 회원의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인
              또는 검토하여야 할 의무가 없으며, 그 결과에 대한 책임을 지지 않습니다.
            </Typography>
          </li>
          <li>
            <Typography variant="captionRegular">
              11. 회사는 관련 법령, 정부 정책 등에 따라 서비스 또는 회원에 따라 서비스 이용시간 등을
              제한할 수 있으며, 이러한 제한사항 및 제한에 따라 발생하는 서비스 이용 관련 제반 사항에
              대해서는 책임이 면제됩니다.
            </Typography>
          </li>
        </Ol>
      </div>
    </Container>
  );
}

export default Service;
