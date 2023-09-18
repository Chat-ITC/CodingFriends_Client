import styles from "./HomePage.module.css";

import Logo from "../../assets/logo/CoFe_logo.png";
import Bottom from "../../component/Bottom/Bottom";
import Camera from "../../assets/etc/addimage.png";
import Becareful from "../../assets/AddInfoIcons/Becareful.png";

import { useState } from "react";
import SelectModal from "../../Modal/SelectModal/SelectModal";
const HomePage = () => {
  const [isModalOpen, sestIsModalOpen] = useState(false);

  const openModal = () => sestIsModalOpen(true);
  const closeModal = () => sestIsModalOpen(false);

  const handleButtonClick = () => {
    const fileInput = document.getElementById("camera");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <>
      <header className={styles.main}>
        <img className={styles.main_img} src={Logo} alt="내 옆에 코딩친구" />
        <h1 className={styles.main_title}>
          내 옆에 <br /> 코딩친구
        </h1>
      </header>
      <div className={styles.camera_border}>
        <div className={styles.camera}>
          <button className={styles.Camera_Btn} onClick={handleButtonClick}>
            <img
              className={styles.camera_img}
              src={Camera}
              alt="사진 첨부 버튼"
            />
            <span>사진을 찍어보세요</span>
          </button>
        </div>
        <input
          type="file"
          id="camera"
          name="camera"
          capture="camera"
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>

      <div className={styles.HomeMainModal}>
        <button type="button" onClick={openModal}>
          open
        </button>
        <SelectModal isOpen={isModalOpen} closeModal={closeModal}>
          <div className={styles.SelectUp}>
            <em className={styles.SelectLang}>학습언어</em>
            <button className={styles.SelectLanguage} type="button">
              C언어
            </button>
          </div>
          <div className={styles.SelectDown}>
            <span className={styles.SelectSubj}>
              <em className={styles.SelectSub}>주제</em>
              <img src={Becareful} alt="경고" />
            </span>
            <button className={styles.SelectSubject} type="button">
              선택없음
            </button>
          </div>
          <div className={styles.SelectBottom}>
            <button className={styles.SelectBtn} type="button">
              확인
            </button>
            <button
              onClick={closeModal}
              className={styles.SelectBtn}
              type="button"
            >
              취소
            </button>
          </div>
        </SelectModal>
      </div>
      <Bottom />
    </>
  );
};

export default HomePage;
