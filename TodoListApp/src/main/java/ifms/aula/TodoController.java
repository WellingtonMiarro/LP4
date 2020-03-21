package ifms.aula;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/javatodos")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping(value = "/")
	public List<Todo> getAll(){
		return todoService.findAll();
		
	}
}
