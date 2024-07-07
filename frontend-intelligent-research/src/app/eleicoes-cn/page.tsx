"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ResearchPage() {
  const [cpf, setCpf] = useState("");

  function verifyCPF(cpf: string) {}

  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <form className={styles.cpfValidateForm} onSubmit={(() => verifyCPF(cpf))}>
          <h1 className={styles.formH1}>Inserir CPF</h1>
          <input
            className={styles.cpfInput}
            type="text"
            placeholder="Digite o seu cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
          {/* <h2>Informe um cpf válido</h2> */}
          <a href="#">Por que pedimos este dado</a>
          <button
            className={styles.submitBtn}
            type="button"
          >Continuar</button>
          {/* TODO: route to explains this question */}
        </form>
      </div>
    </main>
  );
}
