  package serverapp;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Autowired;
import  java.util.Optional;


@RestController
@EnableAutoConfiguration
public class ApiController 
{
  @Autowired
  private PostRepository postRepository;

  @GetMapping("/")
  public String index()
  {
    return "my index";
  }

  @GetMapping(value = "/api/posts/{id}")
  public Optional<Post> getPost(@PathVariable("id") Long id)
  {
    return postRepository.findById(id);
  }

  @PostMapping(value = "/api/posts")
  public void newPost(@RequestBody Post post)
  {
    postRepository.save(post);
  }
  
  @GetMapping(value = "/api/posts")
  public List<Post> getAllPosts()
  {
  List<Post> posts = new ArrayList<>();
    postRepository.findAll().forEach(posts::add);
    return posts;
  }


  /*@RequestMapping(value = "/api/**")
  public List<String> api() 
  {
    List<String> list = new ArrayList<String>();
    list.add("test 1");
    list.add("test 2");
    list.add("test 3");

    return list;
  }*/
}
