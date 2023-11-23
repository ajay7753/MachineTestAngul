package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.CustomerDetails;
import com.demo.entity.LoanDetails;
import com.demo.repository.ILoanDetailsRepo;

@Service
public class LoanServiceImpl implements ILoanService {
	
	ILoanDetailsRepo iLoanDetailsRepo;
@Autowired
	public LoanServiceImpl(ILoanDetailsRepo iLoanDetailsRepo) {
		super();
		this.iLoanDetailsRepo = iLoanDetailsRepo;
	}
@Override
public List<LoanDetails> findAll() {
	return iLoanDetailsRepo.findAll();
}
@Override
public LoanDetails findById(int theId) {
	Optional<LoanDetails>result=iLoanDetailsRepo.findById(theId);

	LoanDetails theLoanDetails=null;

	if(result.isPresent()) {

	theLoanDetails=result.get();

	}

	else {

	throw new RuntimeException("Did not find loan Id "+theId);

	}

	return theLoanDetails;

	}

@Override
public void save(LoanDetails theLoanDetails) {
	iLoanDetailsRepo.save(theLoanDetails);
	
	
}
@Override
public void deleteById(int theId) {
	iLoanDetailsRepo.deleteById(theId);
	
}


}
