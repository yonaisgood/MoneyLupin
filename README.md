<div align=center>

<h1> LUPIN  |  루팡 </h1><br>

<h3> "내가 너무 느린가봐 강의신청은 항상 실패해..." 라는 친구의 고충을 듣고 <br>친구에게 강의신청을 연습할 수 있는 사이트를 만들어 주고 싶어서 기획한 프로젝트 입니다.👩🏻‍💻👨🏻‍💻</h3>
<br>
</div>

![Mask group](https://github.com/yonainthefish/MoneyLupin/assets/124084624/6f2f3a49-b860-403d-aa24-7c514e319800)


<br>

<div align=center>
<h3> 📍 프로젝트 기간 : 2023.08.12 - 2023.08.23  </h3> 
<h3> 📍 프로젝트 소개 : 선착순 수강신청? 연습한자를 따라 올 수 없지!.  </h3> 
<h3> 📍 프로젝트 링크 : [LUPIN 바로가기] : https://lupin-a4f4e.web.app/  </h3> 
  
<details>
<summary> <h3>👀 기능 미리 보기 </h3></summary>

1.로그인 <br>
2.회원가입 <br>
3.홈 <br>
4.강의 상세 (강의시간 예약하기) <br>
5.결제페이지 <br>
6.랭킹페이지 <br>

</details>

</div>

<br><br>
<br><br>

## ✍🏻 팀원 

<div align=center>

![리드미팀(수정)](https://github.com/yonainthefish/MoneyLupin/assets/124084624/56d568f3-b172-4ff4-b7d5-eebb01fc1754)
  
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/KimHayeon1"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="//github.com/suminson97"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="//github.com/yonainthefish"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|:---:|:---:|:---:|

</div>

<br><br>
<br><br>
<br><br>

## <span id="dev">🛠️ 기술 및 개발 환경</span>

<br>
<br>

<div align="center">

| FrontEnd | BackEnd | Design | 협업방식 | 컨벤션 |
| --- | --- | --- | --- | --- |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black"> |  firebase | <img src="https://img.shields.io/badge/figma-FBCEB1?style=flat-square&logo=figma&logoColor=white"> | <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000.svg?style=flat-square&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"> | <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black">|


</div>

<br><br>
<br><br>
<br><br>

## <span id="dev">📈 일, 월간 활성 사용자 수</span>

<br>

<div align=center>
 <h3> 카카오톡 오픈채팅방을 활용해서 사용자를 모집하였습니다. 💻 <br>
 <월 평균 00명> 의 유저가 저희 사이트를 이용했고, 사용자 피드백을 기반으로 버그를 수정하여 서비스 완성도를 높였습니다. 
 </h3>
 </div>

<br>

***

<br><br>

📍일간 활성 유저 수 (DAU: Daily Active User)
<br>

![Mask group (4)](https://github.com/yonainthefish/MoneyLupin/assets/124084624/67cdc2b8-4316-4e0e-bc40-5edc41e25326)

<br><br>

📍월간 활성 유저 수 (MAU: Monthly Active User)
<br>

![Mask group (3)](https://github.com/yonainthefish/MoneyLupin/assets/124084624/77b5f4b8-f230-4e35-b395-bb5af4b595c1)
  
<br><br>
<br><br>
<br><br>

## <span id="dev">📝 핵심코드 </span>

<details>
<summary> <b> 결제하기 버튼 활성화 </b> </summary>
<br>
  
- 1. 강의 오픈 후 10분 간 결제 가능하므로, 현재 시간으로부터 10분 전까지의 모든 예약 시간 데이터를 불러온다.
    
    ```jsx
    const q = query(
    collection(appFireStore, 'time'),
    where(
    'time',
    '>=',
    new Date(currTimeCopy.setMinutes(currTimeCopy.getMinutes() - 10))
    )
    );
    const querySnapshot = await getDocs(q);
    ```
<br>
    
- 2. 현재 시간까지의 예약 시간을 openedTiemList에 추가
    
    ```jsx
    querySnapshot.forEach((document) => {
    	****const date = new Date(document.data().time.seconds * 1000);
    	const dateCopy = new Date(date);
    	const iso = new Date(dateCopy.setHours(dateCopy.getHours() + 9))
    	.toISOString()
    	.slice(0, 16);
    	
    	// 오픈 예정 시간 <= 현재 시간
    	if (date <= currTime) {
    	 openedTiemList.push(iso);
    	}
    ```
<br>

- 3. openedTiemList의 마지막 인덱스 값, 즉 가장 최근 오픈 시간의 결제 여부 확인
    
    ```jsx
    if (openedTiemList.length) {
      ablePay = await checkPaid(openedTiemList[openedTiemList.length - 1]);
    }
    ```
    
    ```jsx
    const checkPaid = async (iso) => {
      const docs = await getDocs(collection(appFireStore, 'Ranking_' + iso));
      const uidList = [];
      docs.forEach((doc) => {
        uidList.push(doc.data().uid);
      });
    
      for (const docUid of uidList) {
        if (uid === docUid) {
          return false;
        }
      }
    
      setPayBtn(true);
      return true;
    };
    ```
</details>


<details>
<summary> <b> 오픈 예정 시간 렌더링 </b> </summary>
<br>

- 1. 결제하기 버튼 활성화 1에서 불러온 데이터 중, 현재 시간 이후의 예약 시간을 result 배열에 추가
    
    ```jsx
    const result = [];
    querySnapshot.forEach((document) => {
      // (중략)
    
      // 오픈 예정 시간 <= 현재 시간
      if (date <= currTime) {
        // (중략)
      } else {
        result.push({
          time: iso,
        });
      }
    ```
<br>

- 2. 예약된 시간이 존재하고, 결제하기 기능 비활성 시 렌더링
    
    ```jsx
    if (result.length && !ablePay) {
      renderOpenTime(result[0].time);
    }
    ```
    
    ```jsx
    const renderOpenTime = (time) => {
      const dayList = {
        Sun: '일',
        Mon: '월',
        Tue: '화',
        Wed: '수',
        Thu: '목',
        Fri: '금',
        Sat: '토',
      };
      const day = dayList[new Date(time).toString().slice(0, 3)];
      const str =
        time.slice(5, 7) + '/' + time.slice(8, 10) + `(${day}) ` + time.slice(11);
      setNextPayTime(str);
    };
    ```
    
    ```jsx
    {nextPayTime && (
      <strong className="openTime">{nextPayTime} 오픈 예정</strong>
    )}
    ```
<br>
</details>



<details>
<summary> <b> 랭킹 리스트 렌더링 </b> </summary>
<br>

- 1. 강의 오픈 시간과 user 정보 데이터를 가져온다.
    
    ```jsx
    const RankingPage = () => {
      const { openTime } = useContext(PayContext); 
      const { user } = useAuthContext();  
    
      const uid = user?.uid || null;  
      const displayName = user?.displayName || null;  
    
      const [userList, setUserList] = useState([]);
      const [userRank, setUserRank] = useState(null);  
      const [userTime, setUserTime] = useState(null);  
    ```
    
- 2.user들의 ranking, displayname, time을 시간순으로 리스트업
    
    ```jsx
    const fetchUserList = async () => {
          try {
            const usersCollection = collection(appFireStore, 'Ranking_' + openTime);  
            const usersSnapshot = await getDocs(usersCollection);  
            const fetchedUsers = [];
    
            usersSnapshot.forEach((doc) => {
              const userData = doc.data();  
              fetchedUsers.push({
                rank: fetchedUsers.length + 1, 
                nickname: userData.displayName,
                time: userData.myTime.toDate().toLocaleTimeString(),  
              });
            });
    
            fetchedUsers
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((v, i) => {
                v.rank = i + 1;
              });
    
            setUserList(fetchedUsers);
    ```
    
- 3.로그인한 사용자의 랭킹과 시간을 찾아 시간 순서대로 화면에 painting
    
    ```jsx
    const userIndex = fetchedUsers.findIndex(
              (u) => u.nickname === displayName
            );
            if (userIndex !== -1) {
              setUserRank(fetchedUsers[userIndex].rank);
              setUserTime(fetchedUsers[userIndex].time);
            }
          } catch (error) {
            console.error('사용자 데이터를 가져오는 중 오류 발생:', error);
          }
        };
    
        fetchUserList();  
      }, [openTime, displayName]);
    ```
    
    ```html
    
     <div>
        <h2>{displayName} 님의 순위는?</h2>
        <strong>{userRank !== null && `${userRank}위`}</strong>  
        <p>{userTime !== null && userTime}</p>  
      </div>
    
      <h2>전체 순위</h2>
      <ul className="rankList">
        {userList.map((user) => (
          <li key={user.rank}>
            <div>{user.rank}</div>  
            <p>{user.nickname}</p>  
            <p>{user.time}</p> 
          </li>
        ))}
      </ul>
    ```
</details>


<details>
<summary> <b> 회원가입 로그인 유효성 검사 </b> </summary>
<br>


- 1. type 에 맞는 input값들을 onChange를 사용해 가져옵니다.
    
    ```jsx
     
    
    <input type="email" required onChange={handleData} value={email} />
    <input type="password" required onChange={handleData} value={password} />
    <input type="text" required onChange={handleData} value={displayName} />
    
    const handleData = (event) => {
        if (event.target.type === 'email') {
          setEmail(event.target.value);
    
        } else if (event.target.type === 'password') {
          setPassword(event.target.value);
    
        } else if (event.target.type === 'text') {
          setDisplayName(event.target.value);
    
        }
      };
    ```
    <br>
    
- 2. 형식에 맞는 유효성 검사를 넣어줍니다.
    
    ```jsx
    const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;
    
    const handleData = (event) => {
        if (event.target.type === 'email') {
          setEmail(event.target.value);
    
          if (emailPattern.test(event.target.value)) {
            setIsEmailError(false);
            setEmailErrorMessage('');
          } else {
            setIsEmailError(true);
            setEmailErrorMessage('*이메일 형식이 맞지 않습니다.');
          }
          console.log(emailErrorMessage);
        } else if (event.target.type === 'password') {
          setPassword(event.target.value);
          if (event.target.value.length < 5) {
            setIsPasswordError(true);
            setPasswordErrorMessage('*비밀번호는 6자 이상이어야 합니다.');
          } else {
            setIsPasswordError(false);
            setPasswordErrorMessage('');
          }
          console.log(passwordErrorMessage);
        } else if (event.target.type === 'text') {
          setDisplayName(event.target.value);
          if (
            event.target.value.trim().length < 2 ||
            event.target.value.trim().length > 8
          ) {
            setIsDisplayNameError(true);
            setDisplayNameErrorMessage('*별명은 2자 이상 8자 이하이어야 합니다.');
          } else {
            setIsDisplayNameError(false);
            setDisplayNameErrorMessage('');
          }
          console.log(displayNameErrorMessage);
        }
      };
    ```
    <br>
    
- 3. 파이어베이스에서 제공하는 에러기능을 활용해 이메일 중복여부검사를 진행해줍니다.
    
    ```jsx
    const signup = (email, password, displayName) => {
        setError(null);
        setPending(true);
    
        // 회원가입이 처리되는 함수
        createUserWithEmailAndPassword(appAuth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            if (!user) {
              throw new Error('회원 가입에 실패했습니다!');
            }
    
            // 회원의 별명정보를 업데이트합니다.
            updateProfile(appAuth.currentUser, { displayName })
              .then(() => {
                setError(null);
                setPending(false);
                dispatch({ type: 'login', payload: user });
              })
              .catch((err) => {
                setError(err.message);
                setPending(false);
                console.log(err.message);
              });
          }) //중복된 이메일 존재시 에러메세지를 alert 합니다.
          .catch((err) => {
            setError(err.message);
            setPending(false);
            console.log(error);
            if (err.message.includes('email-already-in-use')) {
              alert('중복된 이메일이 존재합니다.');
            }
          });
      };
      return { error, isPending, signup };
    };
    
    // 로그인시 가입 여부, 아이디 비밀번호 일치여부 확인코드
    
    .catch((err) => {
            setError(err.message);
            setPending(false);
            console.log(err.message);
            if (err.message.includes('auth/user-not-found')) {
              alert('아이디가 존재하지 않습니다.');
            }
            if (err.message.includes('auth/wrong-password')) {
              alert('비밀번호가 일치하지 않습니다.');
            }
          });
    ```

</details>

<br><br>
<br><br>
<br><br>
  
## <span id="dev">🐛 트러블 슈팅 </span>

<details>
<summary> <b> 1. 랭킹 페이지 랭킹 순서 오류 </b> </summary>
<br>
  
|현 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 상|랭킹 페이지에서 수강 신청을 완료한 시간 순서대로 리스트업 되지 않음|
|:---:|:---|
|**원 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 인**|**파이어 스토어에 데이터가 순서대로 쌓이지 않고, 문서 이름의 해시 값에 따라 정렬됨**|
|**해결방법**|**데이터를 받아온 후, myTime을 비교하여 빠른 순으로 정렬**|
|**개선방안**|**데이터를 쌓을 때 문서 이름을 추가하여, 시간 순으로 정렬 될 수 있도록 개선**|
<br>
</details>


<details>
<summary> <b> 2. 결제하기 기능 활성화 오류 </b> </summary>
<br>

|현 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 상|가장 최근 오픈된 시간에 결제했으나, 결제하기 기능이 활성화되는 경우 존재|
|:---:|:---|
|**원 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 인**|**현재 시간으로부터 10분 전까지의 예약 시간 중, 사용자가 결제한 내역이 없는 시간이 존재할 경우, 활성화되는 로직**|
|**해결방법**|**가장 최근 오픈된 시간에 결제하지 않았다면, 활성화되도록 수정**|
|**개선방안**|**현재 결제하기는 오픈 후 10분 동안 활성화됨. 시간 예약이 1분 간격으로 가능하므로, 결제하기 또한 1분으로 변경 고려**|
<br>
</details>

<details>
<summary> <b> 3. 회원가입 시 텍스트 인식 오류 </b> </summary>
<br>

|현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상|텍스트 자동완성, 붙여넣기, 드래그 후 삭제 시 유효성 검사가 진행되지 않음|
|:---:|:---|
|**원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인**|**onChange 이벤트 발생 시, e.target.value 값을 상태 업데이트 함수에 넣어둔 후 그 상태 값으로 검사를 실행한 문제, 상태 업데이트 함수들은 비동기적으로 동작하기 때문에 값이 바로 적용되지 않는다.**|
|**해결방법**|**상태 값에 저장하지 않고 e.target.value 값을 직접 사용해 유효성 검사를 진행하였다**|
|**개선방안**|**코드 이해가 어려울 수 있으므로 e.target.value를 변수에 저장한 후 사용하면 가독성을 높일 수 있겠다.**|

<br><br>
<br><br>
<br><br>

