package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.CustomerDetails;
import com.demo.entity.LoanDetails;
import com.demo.service.ILoanService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class LoanController {
	
	private ILoanService iLoanServ;
	@Autowired
	public LoanController(ILoanService iLoanServ) {
		super();
		this.iLoanServ = iLoanServ;
	}
	
	@GetMapping("/loans")

	public List<LoanDetails> findAll() {

	return iLoanServ.findAll();

	}

	@GetMapping("/loans/{loanId}")

	public LoanDetails getLoanDetails(@PathVariable int loanId) {

		LoanDetails theLoanDetails = iLoanServ.findById(loanId);

	if (theLoanDetails == null) {

	throw new RuntimeException("loan id not found-" + loanId);

	}

	return theLoanDetails;

	}

	@PostMapping("/loans")

	public LoanDetails addLoanDetails(@RequestBody LoanDetails theLoanDetails) {

	theLoanDetails.setLoanId(0);

	iLoanServ.save(theLoanDetails);

	return theLoanDetails;

	}




	@DeleteMapping("/loans/{loanId}")

	public String deleteLoanDetails(@PathVariable int loanId) {

		LoanDetails theLoanDetails = iLoanServ.findById(loanId);

	if (theLoanDetails == null) {

	throw new RuntimeException("loan id not found-" + loanId);

	}

	iLoanServ.deleteById(loanId);

	return "Deleted loan id: " + loanId;

	}
	
	
	

}
