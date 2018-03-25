package serverapp;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;


@Controller
@EnableAutoConfiguration
public class HomeController 
{
  @GetMapping(value = {"/page1/**", "/page2/**", "/page3/**"})
  public String index() 
  {
    return "forward:/";
  }
}
