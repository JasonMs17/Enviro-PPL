import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import logoEnviro from "../assets/logoEnviro.png";
import background from "../assets/Background-login.jpg";
import { http } from "../utils/fetch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import format dari date-fns

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth_date, setBirthDate] = useState(null); // Menggunakan null sebagai nilai awal
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [errorKey, setErrorKey] = useState(0);

  // Calculate min and max dates for birth date
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  );
  const maxDate = new Date(
    today.getFullYear() - 5,
    today.getMonth(),
    today.getDate()
  );

  // Generate years array for dropdown
  const years = Array.from(
    { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
    (_, i) => minDate.getFullYear() + i
  ).reverse();

  // Custom header component for DatePicker
  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    changeYear,
  }) => (
    <div className="custom-datepicker-header">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        type="button"
        className="datepicker-nav-button"
      >
        {"<"}
      </button>
      <select
        value={date.getFullYear()}
        onChange={({ target: { value } }) => changeYear(value)}
        className="datepicker-year-select"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        type="button"
        className="datepicker-nav-button"
      >
        {">"}
      </button>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await http("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          birth_date: birth_date ? format(birth_date, "yyyy-MM-dd") : null, // Format tanggal ke ISO
          password,
          password_confirmation: confirmPassword,
        }),
      });

      if (!response.ok) {
        if (response.status === 422) {
          const errData = await response.json();
          setErrors(errData.errors);
        } else {
          const errData = await response.json();
          console.error("Pendaftaran gagal:", errData);
          setErrorMessage("Pendaftaran gagal. Coba lagi.");
        }
        return;
      }

      const resData = await response.json();
      localStorage.setItem("user", JSON.stringify(resData));
      console.log("Pendaftaran berhasil!");
      window.location.href = "/send-email";
    } catch (error) {
      console.error("Pendaftaran error:", error);
      setErrorMessage("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
    <div className="register-user">
      <div className="register-form">
        <header>
          <div className="logoEnviro">
            <img src={logoEnviro} alt="Website Logo" />
          </div>
          <p>Buat Akun Baru</p>
        </header>

        <form id="form" onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              type="text"
              id="name"
              placeholder="Nama"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "input-error" : ""}
            />
          </div>
          {errors.name && <p className="error">{errors.name[0]}</p>}

          <div className="inputgroup">
            <input
              type="text"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "input-error" : ""}
            />
          </div>
          {errors.email && <p className="error">{errors.email[0]}</p>}

          <DatePicker
            selected={birth_date}
            onChange={(date) => setBirthDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="Tanggal lahir"
            inputClassName={`custom-datepicker-input ${
              errors.birth_date ? "input-error" : ""
            }`}
            required
            minDate={minDate}
            maxDate={maxDate}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            yearDropdownItemNumber={100}
            scrollableYearDropdown
            className="custom-datepicker"
            popperClassName="custom-datepicker-popper"
            popperPlacement="bottom-start"
            popperModifiers={[
              {
                name: "offset",
                options: {
                  offset: [0, 12],
                },
              },
              {
                name: "preventOverflow",
                options: {
                  boundary: "viewport",
                  padding: 8,
                },
              },
            ]}
            calendarClassName="custom-datepicker-calendar"
          />

          {errors.birth_date && <p className="error">{errors.birth_date[0]}</p>}

          <div className="input-box">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "input-error" : ""}
            />
          </div>
          {errors.password && <p className="error">{errors.password[0]}</p>}

          <div className="input-box">
            <input
              type="password"
              id="confirm-password"
              placeholder="Konfirmasi Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.password_confirmation ? "input-error" : ""}
            />
          </div>
          {errors.password_confirmation && (
            <p className="error">{errors.password_confirmation[0]}</p>
          )}

          <input type="submit" id="Login" value="Daftar" />
        </form>

        {errorMessage && (
          <p className="error" key={errorKey}>
            {errorMessage}
          </p>
        )}

        <div className="signup-lupapassword">
          <div className="signUp">
            <p>
              Sudah punya akun?{" "}
              <a href="/login" className="highlight">
                Masuk
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="imageLogin">
        <img src={background} alt="Background" />
      </div>
    </div>
  );
}

export default RegisterForm;
