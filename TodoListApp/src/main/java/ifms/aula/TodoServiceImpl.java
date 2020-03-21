package ifms.aula;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	private TodoRepository todoRepository;

	@Override
	public List<Todo> findAll() {
		
		return todoRepository.findAll();
	}

	@Override
	public void saveOrUpdate(Todo todo) {
		todoRepository.save(todo);
		
	}

}
