package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.CustomerDetails;
import com.demo.entity.LoanDetails;

public interface ILoanDetailsRepo extends JpaRepository<LoanDetails, Integer> {

}
