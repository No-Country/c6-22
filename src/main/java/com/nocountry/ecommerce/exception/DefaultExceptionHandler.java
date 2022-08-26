package com.nocountry.ecommerce.exception;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.nocountry.ecommerce.rest.dto.response.ErrorResponse;

@ControllerAdvice
public class DefaultExceptionHandler {
  
  private static final String SOMETHING_WENT_WRONG = "Something went wrong.";
  private static final String RECORD_NOT_FOUND = "Record not found in database.";

  @ExceptionHandler(value = Exception.class)
  public ResponseEntity<ErrorResponse> handleException(Exception e) {
    ErrorResponse errorResponse = buildError(HttpStatus.BAD_REQUEST,
        SOMETHING_WENT_WRONG,
        e.getMessage());
    return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(value = NotFoundException.class)
  public ResponseEntity<ErrorResponse> handleNotFoundException(
      NotFoundException e) {
    ErrorResponse errorResponse = buildError(HttpStatus.NOT_FOUND,
        RECORD_NOT_FOUND,
        e.getMessage());
    return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
  }
  
  private ErrorResponse buildError(HttpStatus httpStatus, String message, List<String> moreInfo) {
    return ErrorResponse.builder()
        .statusCode(httpStatus.value())
        .message(message)
        .moreInfo(moreInfo)
        .build();
  }
  
  private ErrorResponse buildError(HttpStatus httpStatus, String message, String moreInfo) {
    return buildError(httpStatus, message, List.of(moreInfo));
  }

}
